import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';

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

  const downloadPDF = () => {
    if (!response || !response.report) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Title
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('News Report', margin, yPosition);
    yPosition += 10;

    // Metadata
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Topic: ${response.topic}`, margin, yPosition);
    yPosition += 6;
    doc.text(`Mode: ${response.mode}`, margin, yPosition);
    yPosition += 6;
    doc.text(`Type: ${response.report_type}`, margin, yPosition);
    yPosition += 12;

    // Report content
    doc.setFontSize(11);
    const lines = doc.splitTextToSize(response.report, maxWidth);
    
    lines.forEach((line) => {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += 6;
    });

    // Download
    const filename = `${response.topic.replace(/\s+/g, '_')}_${response.mode}_report.pdf`;
    doc.save(filename);
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
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <h3 style={{ color: '#5227FF', fontSize: '1.25rem', margin: 0 }}>
                Report Generated
              </h3>
              <button
                onClick={downloadPDF}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#5227FF',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#6237FF'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#5227FF'}
              >
                <span>📄</span> Download PDF
              </button>
            </div>
            <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#999' }}>
              <p><strong>Topic:</strong> {response.topic}</p>
              <p><strong>Mode:</strong> {response.mode}</p>
              <p><strong>Type:</strong> {response.report_type}</p>
            </div>
            <div 
              className="markdown-content"
              style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                backgroundColor: '#131313',
                borderRadius: '8px',
                lineHeight: '1.8'
              }}
            >
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 style={{color: '#ffffff', fontSize: '1.8rem', marginTop: '1.5rem', marginBottom: '1rem', fontWeight: '700'}} {...props} />,
                  h2: ({node, ...props}) => <h2 style={{color: '#5227FF', fontSize: '1.5rem', marginTop: '1.3rem', marginBottom: '0.8rem', fontWeight: '600'}} {...props} />,
                  h3: ({node, ...props}) => <h3 style={{color: '#ffffff', fontSize: '1.2rem', marginTop: '1rem', marginBottom: '0.6rem', fontWeight: '600'}} {...props} />,
                  p: ({node, ...props}) => <p style={{color: '#cccccc', marginBottom: '1rem', lineHeight: '1.8'}} {...props} />,
                  ul: ({node, ...props}) => <ul style={{color: '#cccccc', marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc'}} {...props} />,
                  ol: ({node, ...props}) => <ol style={{color: '#cccccc', marginLeft: '1.5rem', marginBottom: '1rem'}} {...props} />,
                  li: ({node, ...props}) => <li style={{marginBottom: '0.5rem', lineHeight: '1.6'}} {...props} />,
                  strong: ({node, ...props}) => <strong style={{color: '#ffffff', fontWeight: '700'}} {...props} />,
                  em: ({node, ...props}) => <em style={{color: '#aaaaaa'}} {...props} />,
                  code: ({node, inline, ...props}) => 
                    inline 
                      ? <code style={{backgroundColor: '#2a2a2a', padding: '2px 6px', borderRadius: '4px', color: '#5227FF', fontSize: '0.9em'}} {...props} />
                      : <code style={{display: 'block', backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '6px', color: '#cccccc', overflowX: 'auto', marginBottom: '1rem'}} {...props} />,
                  blockquote: ({node, ...props}) => <blockquote style={{borderLeft: '4px solid #5227FF', paddingLeft: '1rem', marginLeft: 0, color: '#aaaaaa', fontStyle: 'italic'}} {...props} />
                }}
              >
                {response.report}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
