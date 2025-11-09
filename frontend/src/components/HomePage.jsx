import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shuffle from '../utils/Shuffle';
import TrueFocus from '../utils/TrueFocus';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <main className="homepage-content" style={{ position: 'relative', zIndex: 1 }}>
        <section id="home" className="hero-section" style={{ 
          padding: '100px 20px', 
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Shuffle
            text="DrishtiWave: Agentic AI-Powered News"
            tag="h1"
            textAlign="center"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              marginBottom: '2rem',
              color: '#ffffff',
              fontWeight: '700',
              lineHeight: '1.2',
              maxWidth: '90%'
            }}
            shuffleDirection="right"
            duration={0.5}
            ease="power3.out"
            threshold={0.2}
            shuffleTimes={3}
            animationMode="evenodd"
            stagger={0.04}
            colorFrom="#5227FF"
            colorTo="#ffffff"
            triggerOnce={true}
            triggerOnHover={false}
          />
          <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <TrueFocus
              sentence="News Facts"
              manualMode={false}
              blurAmount={5}
              borderColor="#5227FF"
              glowColor="rgba(82, 39, 255, 0.6)"
              animationDuration={0.8}
              pauseBetweenAnimations={2}
            />
          </div>
          <button
            onClick={() => navigate('/news')}
            style={{
              marginTop: '3rem',
              padding: '1rem 3rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#000000',
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 25px rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
            }}
          >
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
