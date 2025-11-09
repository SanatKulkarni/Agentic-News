import React from 'react';
import ShinyText from '../utils/ShinyText';
import ScrollReveal from '../utils/ScrollReveal';

const AboutPage = () => {
  const scrollToNext = (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#131313',
      padding: '100px 20px 100px',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700'
          }}>
            <ShinyText text="About DrishtiWave" speed={3} />
          </h1>
          <button 
            onClick={scrollToNext}
            style={{
              position: 'absolute',
              bottom: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#ffffff',
              fontSize: '2rem',
              opacity: 0.6,
              transition: 'opacity 0.3s ease',
              animation: 'bounce 2s infinite'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.6'}
          >
            ↓
          </button>
        </div>
        
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px', position: 'relative' }}>
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.1}
            baseRotation={3}
            blurStrength={6}
            textClassName="about-text"
            rotationEnd="center center"
            wordAnimationEnd="center center"
          >
            DrishtiWave is an AI-powered news aggregation platform that provides intelligent insights and comprehensive reports on any topic you're interested in.
          </ScrollReveal>
          <button 
            onClick={scrollToNext}
            style={{
              position: 'absolute',
              bottom: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#ffffff',
              fontSize: '2rem',
              opacity: 0.6,
              transition: 'opacity 0.3s ease',
              animation: 'bounce 2s infinite'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.6'}
          >
            ↓
          </button>
        </div>

        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px', position: 'relative' }}>
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.1}
            baseRotation={3}
            blurStrength={6}
            textClassName="about-text"
            rotationEnd="center center"
            wordAnimationEnd="center center"
          >
            Powered by advanced AI models, we deliver overview reports, latest news updates, and strategic forecasts to keep you informed and ahead of the curve.
          </ScrollReveal>
          <button 
            onClick={scrollToNext}
            style={{
              position: 'absolute',
              bottom: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#ffffff',
              fontSize: '2rem',
              opacity: 0.6,
              transition: 'opacity 0.3s ease',
              animation: 'bounce 2s infinite'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.6'}
          >
            ↓
          </button>
        </div>

        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.1}
            baseRotation={3}
            blurStrength={6}
            textClassName="about-text"
            rotationEnd="center center"
            wordAnimationEnd="center center"
          >
            Made by Sanat Kulkarni
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
