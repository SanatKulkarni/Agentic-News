import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StaggeredMenu } from './utils/StaggeredMenu'
import HomePage from './components/HomePage'
import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'

function App() {
  const menuItems = [
    { label: 'Home', link: '/', ariaLabel: 'Navigate to home page' },
    { label: 'News', link: '/news', ariaLabel: 'Navigate to news page' },
    { label: 'About', link: '/about', ariaLabel: 'Navigate to about page' }
  ];

  const socialLinks = [
    { label: 'Twitter', link: 'https://x.com/SanatKulkarni25' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/sanat-kulkarni/' },
    { label: 'GitHub', link: 'https://github.com/SanatKulkarni' }
  ];

  return (
    <Router>
      <div className="app">
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
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
