import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#131313',
      padding: '100px 20px 60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          color: '#ffffff',
          fontWeight: '700'
        }}>
          About DrishtiWave
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#999999',
          lineHeight: '1.8',
          marginBottom: '2rem'
        }}>
          DrishtiWave is an AI-powered news aggregation platform that provides intelligent insights 
          and comprehensive reports on any topic you're interested in.
        </p>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#999999',
          lineHeight: '1.8'
        }}>
          Powered by advanced AI models, we deliver overview reports, latest news updates, 
          and strategic forecasts to keep you informed and ahead of the curve.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
