from flask import Flask, request, jsonify
from dotenv import load_dotenv
from strands import Agent, tool
from strands.models import BedrockModel
from strands_tools import http_request
from flask_cors import CORS  
import os

load_dotenv()

AWS_BEARER_TOKEN_BEDROCK = os.getenv("AWS_BEARER_TOKEN_BEDROCK")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
NEWS_API_KEY = os.getenv("NEWS_API_KEY")

if not AWS_BEARER_TOKEN_BEDROCK:
    raise EnvironmentError("Missing AWS_BEARER_TOKEN_BEDROCK")
if not GITHUB_TOKEN:
    raise EnvironmentError("Missing GITHUB_TOKEN")
if not NEWS_API_KEY:
    raise EnvironmentError("Missing NEWS_API_KEY")

def get_model(temp: float):
    return BedrockModel(
        model_id="us.anthropic.claude-sonnet-4-20250514-v1:0",
        temperature=temp,
        max_tokens=1000
    )

SYSTEM_PROMPT_OVERVIEW = """
You are a News & Trend Intelligence Assistant. Mode: **Overview**.
For a given topic, provide:
  - a summary of what the topic is,
  - how it evolved (oldest → latest trends),
  - what truly matters now.
"""

SYSTEM_PROMPT_LATEST = """
You are a News & Trend Intelligence Assistant. Mode: **Latest Report**.
For a given topic, in the last 24-48 hours:
  - fetch input streams (news API, RSS, social media),
  - identify top emerging trends,
  - note sentiment shifts or anomalies,
  - produce a concise actionable report.
"""

SYSTEM_PROMPT_FORECAST = """
You are a News & Trend Intelligence Assistant. Mode: **Forecast & Strategic Implications**.
For a given topic:
  - based on historical evolution + latest trends,
  - forecast 2-3 possible scenarios for the next 3-12 months,
  - highlight strategic implications or opportunities to act on.
"""

@tool
def fetch_rss_feed(url: str, limit: int = 50) -> str:
    import requests
    resp = requests.get(url, timeout=10)
    resp.raise_for_status()
    return resp.text

@tool
def query_news_api(query: str, from_time: str = None, to_time: str = None, limit: int = 20) -> str:
    url = f"https://newsapi.org/v2/everything?q={query}&apiKey={NEWS_API_KEY}"
    if from_time:
        url += f"&from={from_time}"
    if to_time:
        url += f"&to={to_time}"
    url += f"&pageSize={limit}"
    resp = http_request({"url": url, "method": "GET", "timeout": 10})
    return resp.get("body", "")

@tool
def analyze_sentiment(text: str) -> dict:
    # stub
    return {"positive": 0.0, "negative": 0.0, "neutral": 0.0}

@tool
def github_org_check(org_name: str) -> dict:
    url = f"https://api.github.com/orgs/{org_name}"
    headers = {"Authorization": f"token {GITHUB_TOKEN}"}
    resp = http_request({"url": url, "method": "GET", "headers": headers, "timeout": 10})
    return resp

def create_agent(mode: str, temperature: float, tools: list):
    if mode == "overview":
        prompt = SYSTEM_PROMPT_OVERVIEW
    elif mode == "latest":
        prompt = SYSTEM_PROMPT_LATEST
    elif mode == "forecast":
        prompt = SYSTEM_PROMPT_FORECAST
    else:
        raise ValueError(f"Unknown mode: {mode}")
    model = get_model(temperature)
    return Agent(model=model, system_prompt=prompt, tools=tools)

REPORT_TYPE_TO_TEMPERATURE = {
    "short": 0.1,
    "medium": 0.3,
    "detailed": 0.6
}

app = Flask(__name__)
CORS(app)  # <- enable CORS for all origins and all routes

@app.route('/generate_report', methods=['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'])
def generate_report():
    data = request.json or {}
    topic = data.get("topic", "").strip()
    mode  = data.get("mode", "overview").strip().lower()
    report_type = data.get("report_type", "short").strip().lower()

    if not topic:
        return jsonify({"error": "topic is required"}), 400
    if mode not in ["overview", "latest", "forecast"]:
        return jsonify({"error": "mode must be one of overview, latest, forecast"}), 400
    if report_type not in REPORT_TYPE_TO_TEMPERATURE:
        return jsonify({"error": "report_type must be one of short, medium, detailed"}), 400

    temperature = REPORT_TYPE_TO_TEMPERATURE[report_type]
    tools = [fetch_rss_feed, query_news_api, analyze_sentiment, github_org_check, http_request]
    agent = create_agent(mode, temperature, tools)

    prompt = f"""
Topic: {topic}

Please perform your task in **{mode}** mode, with a **{report_type}** report length.
Generate your output accordingly.
"""
    try:
        result = agent(prompt)
        return jsonify({"topic": topic, "mode": mode, "report_type": report_type, "report": str(result)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.getenv("PORT", 5000)))
