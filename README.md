# DrishtiWave: Agentic AI-Powered News Aggregation

<div align="center">

**AI-Powered News Intelligence Platform**

*See the News Clearly*

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0+-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![AWS Bedrock](https://img.shields.io/badge/AWS_Bedrock-AI-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/bedrock/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

</div>

---

## Deployed Link
https://agentic-news.vercel.app/
Backend Deployed Link: https://agentic-news-m83u.onrender.com

## Overview

DrishtiWave is an intelligent news aggregation platform that leverages agentic AI to transform how you consume news. Instead of drowning in countless articles and headlines, get **AI-curated, structured reports** tailored to your specific needs.

### Key Features

- **Agentic AI-Powered**: Advanced AI agents intelligently search, analyze, and synthesize news from multiple sources
- **Three Report Modes**: Overview, Latest Updates, or Future Forecasts
- **Customizable Depth**: Short, Medium, or Detailed reports based on your time and needs
- **Beautiful Markdown Formatting**: Clean, structured reports with proper formatting
- **PDF Export**: Download your reports as professional PDFs
- **Lightning Fast**: Built with modern web technologies for optimal performance
- **Stunning Animations**: Smooth, delightful user experience with GSAP animations

---

## Demo Video

<div align="center">
  <a href="https://youtu.be/jhB28tiKep4" target="_blank">
    <img src="https://img.youtube.com/vi/jhB28tiKep4/maxresdefault.jpg" alt="DrishtiWave Demo Video" style="width:80%; max-width:800px;">
  </a>
  
  **[🎬 Watch Full Demo on YouTube](https://youtu.be/jhB28tiKep4)**
</div>

---

## Use Cases

- **Business Professionals**: Track market trends and competitor activities
- **Researchers**: Gather comprehensive information on complex topics
- **Decision Makers**: Get predictive insights and strategic forecasts
- **Curious Minds**: Understand any topic with AI-curated intelligence

---

## Architecture

### Frontend
- **React 19.1.1** - Modern UI framework
- **Vite 7.1.2** - Lightning-fast build tool
- **React Router DOM** - Seamless navigation
- **GSAP 3.13.0** - Professional animations
- **Tailwind CSS 4.1.17** - Utility-first styling
- **react-markdown** - Beautiful report rendering
- **jsPDF** - PDF generation

### Backend
- **Flask** - Lightweight Python web framework
- **flask-cors** - Cross-origin resource sharing
- **AWS Bedrock** - Advanced AI model access
- **Strands Framework** - Agentic AI orchestration
- **News API** - Real-time news aggregation

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.9 or higher)
- **AWS Account** with Bedrock access
- **News API Key**
- **GitHub Access Token**

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/SanatKulkarni/Agentic-News.git
cd Agentic-News
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On macOS/Linux:
source .venv/bin/activate
# On Windows:
# .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# Create a .env file or export variables:
export NEWS_API_KEY="your_news_api_key"
export GITHUB_TOKEN="your_github_token"
export AWS_ACCESS_KEY_ID="your_aws_access_key"
export AWS_SECRET_ACCESS_KEY="your_aws_secret_key"

# Run the Flask server
python main.py
```

The backend will start on `http://localhost:5000`

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on `http://localhost:5173`

---

## Project Structure

```
Agentic-News/
├── backend/
│   ├── main.py              # Flask API server
│   ├── requirements.txt     # Python dependencies
│   └── .gitignore          # Backend gitignore
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   └── HomePage.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── NewsPage.jsx
│   │   │   └── AboutPage.jsx
│   │   ├── utils/          # Utility components
│   │   │   ├── StaggeredMenu.jsx
│   │   │   ├── Shuffle.jsx
│   │   │   ├── TrueFocus.jsx
│   │   │   ├── ShinyText.jsx
│   │   │   └── ScrollReveal.jsx
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── vite.config.js
├── .gitignore              # Root gitignore
├── README.md               # Project documentation
└── VIDEO_SCRIPT.md         # Video demo script
```

---

## Features in Detail

### 1. **Smart Report Generation**
Enter any topic and choose from three intelligence modes:
- **Overview**: Comprehensive understanding of the topic
- **Latest**: Breaking news and recent developments
- **Forecast**: Predictive insights and future trends

### 2. **Flexible Report Depth**
Customize report length based on your needs:
- **Short**: Quick briefings (~500 words)
- **Medium**: Balanced coverage (~1500 words)
- **Detailed**: In-depth analysis (~3000+ words)

### 3. **Beautiful UI/UX**
- Animated hero section with text scramble effects
- Smooth scroll-triggered animations
- Responsive design for all devices
- Intuitive navigation with animated menu

### 4. **Export & Share**
- One-click PDF download
- Professional formatting maintained
- Ready to share with team or save for later

---

## 🛠️ Technology Stack

### Frontend Technologies
| Technology | Purpose |
|-----------|---------|
| React 19.1.1 | UI Framework |
| Vite 7.1.2 | Build Tool |
| GSAP 3.13.0 | Animations |
| React Router DOM | Routing |
| Tailwind CSS 4.1.17 | Styling |
| react-markdown | Markdown Rendering |
| jsPDF | PDF Generation |
| motion 12.23.24 | Additional Animations |

### Backend Technologies
| Technology | Purpose |
|-----------|---------|
| Flask | Web Framework |
| flask-cors | CORS Handling |
| AWS Bedrock | AI Models |
| Strands | Agentic AI Framework |
| News API | News Aggregation |

---

## API Endpoints

### `POST /generate_report`

Generate an AI-powered news report.

**Request Body:**
```json
{
  "topic": "Artificial Intelligence",
  "mode": "overview",
  "report_type": "medium"
}
```

**Parameters:**
- `topic` (string, required): The news topic to research
- `mode` (string, required): Report mode - `"overview"`, `"latest"`, or `"forecast"`
- `report_type` (string, required): Report depth - `"short"`, `"medium"`, or `"detailed"`

**Response:**
```json
{
  "report": "# AI-Generated Report\n\n## Introduction\n\n...",
  "topic": "Artificial Intelligence",
  "mode": "overview",
  "report_type": "medium"
}
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sanat Kulkarni**

- GitHub: [@SanatKulkarni](https://github.com/SanatKulkarni)
- Project Link: [https://github.com/SanatKulkarni/Agentic-News](https://github.com/SanatKulkarni/Agentic-News)

---

## Acknowledgments

- AWS Bedrock for AI capabilities
- News API for news aggregation
- GSAP for amazing animations
- React community for excellent tools and libraries

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Sanat Kulkarni

</div>
