import React, { useState } from 'react';

const NewsPage = () => {
  const [topic, setTopic] = useState('');
  const [mode, setMode] = useState('overview');
  const [reportType, setReportType] = useState('short');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('https://agentic-news-m83u.onrender.com/generate_report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: topic,
          mode: mode,
          report_type: reportType,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#131313',
      padding: '100px 20px 60px',
      position: 'relative',
      zIndex: 1,
      pointerEvents: 'auto'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        pointerEvents: 'auto'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem', 
          textAlign: 'center',
          color: '#ffffff',
          fontWeight: '700'
        }}>
          Generate News Report
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#999999',
          marginBottom: '3rem',
          fontSize: '1.1rem'
        }}>
          Get AI-powered insights on any topic
        </p>
        
        <form onSubmit={handleSubmit} style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: '2rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '12px',
          border: '1px solid #333'
        }}>
          {/* Topic Input */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="topic" style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.95rem' }}>
              Topic
            </label>
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., electric vehicles"
              required
              style={{
                padding: '0.75rem',
                backgroundColor: '#131313',
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#5227FF'}
              onBlur={(e) => e.target.style.borderColor = '#444'}
            />
          </div>

          {/* Mode Select */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="mode" style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.95rem' }}>
              Mode
            </label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              style={{
                padding: '0.75rem',
                backgroundColor: '#131313',
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#5227FF'}
              onBlur={(e) => e.target.style.borderColor = '#444'}
            >
              <option value="overview">Overview</option>
              <option value="latest">Latest</option>
              <option value="forecast">Forecast</option>
            </select>
          </div>

          {/* Report Type Select */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="reportType" style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.95rem' }}>
              Report Type
            </label>
            <select
              id="reportType"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              style={{
                padding: '0.75rem',
                backgroundColor: '#131313',
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '1rem',
                outline: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#5227FF'}
              onBlur={(e) => e.target.style.borderColor = '#444'}
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="detailed">Detailed</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '1rem',
              backgroundColor: loading ? '#666' : '#5227FF',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              marginTop: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (!loading) e.target.style.backgroundColor = '#6237FF';
            }}
            onMouseLeave={(e) => {
              if (!loading) e.target.style.backgroundColor = '#5227FF';
            }}
          >
            {loading ? 'Generating Report...' : 'Generate Report'}
          </button>
        </form>

        {/* Error Display */}
        {error && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#2a1a1a',
            border: '1px solid #ff4444',
            borderRadius: '8px',
            color: '#ff6666',
            width: '100%',
            maxWidth: '600px',
            margin: '2rem auto 0'
          }}>
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Response Display */}
        {response && (
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            backgroundColor: '#1a1a1a',
            border: '1px solid #5227FF',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '600px',
            margin: '2rem auto 0',
            color: '#ffffff'
          }}>
            <h3 style={{ color: '#5227FF', marginBottom: '1rem', fontSize: '1.25rem' }}>
              Report Generated
            </h3>
            <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#999' }}>
              <p><strong>Topic:</strong> {response.topic}</p>
              <p><strong>Mode:</strong> {response.mode}</p>
              <p><strong>Type:</strong> {response.report_type}</p>
            </div>
            <div style={{
              marginTop: '1.5rem',
              padding: '1.5rem',
              backgroundColor: '#131313',
              borderRadius: '8px',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}>
              {response.report}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
