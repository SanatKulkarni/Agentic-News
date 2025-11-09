import React from 'react';
import { StaggeredMenu } from '../utils/StaggeredMenu';
import Shuffle from '../utils/Shuffle';
import TrueFocus from '../utils/TrueFocus';

const HomePage = () => {
  const menuItems = [
    { label: 'Home', link: '#home', ariaLabel: 'Navigate to home section' },
    { label: 'News', link: '#news', ariaLabel: 'Navigate to news section' },
    { label: 'About', link: '#about', ariaLabel: 'Navigate to about section' }
  ];

  const socialLinks = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'GitHub', link: 'https://github.com' }
  ];

  return (
    <div className="homepage">
      <StaggeredMenu
        position="right"
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        items={menuItems}
        socialItems={socialLinks}
        displaySocials={true}
        displayItemNumbering={true}
        logoUrl="/vite.png"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        accentColor="#5227FF"
        changeMenuColorOnOpen={true}
        isFixed={true}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      
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
        </section>
        
        <section id="news" style={{ 
          padding: '60px 20px', 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem', 
            textAlign: 'center',
            color: '#ffffff'
          }}>
            Latest News
          </h2>
          <p style={{ textAlign: 'center', color: '#888888' }}>News content will appear here</p>
        </section>
        
        <section id="about" style={{ 
          padding: '60px 20px', 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem', 
            textAlign: 'center',
            color: '#ffffff'
          }}>
            About
          </h2>
          <p style={{ textAlign: 'center', color: '#888888' }}>Information about Agentic News</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
