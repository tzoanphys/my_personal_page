import { useState } from 'react';
import { useLocation, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import SkillPage from './SkillPage';
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import EducationPage from './EducationPage';
import ProjectsPage from './ProjectsPage';
import PublicationsPage from './PublicationsPage';
import ContactPage from './ContactPage';

function App() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // helper style for active menu item
  const menuItemStyle = (path) => {
    const isActive = location.pathname === path || (path === '/' && (location.pathname === '/' || location.pathname.startsWith('/skill')));
    return {
      cursor: "pointer",
      margin: "10px 0",
      padding: "8px 12px",
      borderRadius: "8px",
      backgroundColor: isActive ? "#00857A" : "transparent",
      color: isActive ? "white" : "#00F5C4",
      border: "none",
      textAlign: "left",
      width: "100%",
      fontSize: "18px",
      textDecoration: "none",
      display: "block"
    };
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#1F1F1F",
        color: "white",
        fontFamily: "inherit",
        fontSize: "18px",
        position: "relative"
      }}
    >
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="mobile-menu-button"
        style={{
          display: "none",
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1001,
          backgroundColor: "#00857A",
          border: "none",
          color: "white",
          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "24px"
        }}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 999
          }}
        />
      )}

      {/* LEFT SIDEBAR */}
      <div
        className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}
        style={{
          width: "280px",
          backgroundColor: "#111",
          padding: "24px 20px",
          borderRight: "2px solid #00857A",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          flexShrink: 0
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img 
            src="/unnamed1.jpg" 
            alt="Eagle Logo" 
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain"
            }}
          />
        </div>
        <h2
          style={{
            color: "#00F5C4",
            textAlign: "center",
            fontSize: "26px",
            marginTop: 0,
            marginBottom: "24px"
          }}
        >
          Menu
        </h2>

        <div style={{ marginTop: "10px" }}>
          <Link 
            to="/" 
            style={menuItemStyle('/')}
            onClick={() => setMobileMenuOpen(false)}
          >
            About &amp; Expertise
          </Link>
          <Link 
            to="/workingexperience" 
            style={menuItemStyle('/workingexperience')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Working Experience
          </Link>
          <Link 
            to="/education" 
            style={menuItemStyle('/education')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Education
          </Link>
          <Link 
            to="/projects" 
            style={menuItemStyle('/projects')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/publications" 
            style={menuItemStyle('/publications')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Publications
          </Link>
          <Link 
            to="/contact" 
            style={menuItemStyle('/contact')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* MAIN AREA */}
      <div
        className="main-content"
        style={{
          flex: 1,
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          width: "100%"
        }}
      >
        {/* HEADER */}
        <div
          style={{
            backgroundColor: "#00857A",
            padding: "24px",
            borderRadius: "10px",
            marginBottom: "32px",
            textAlign: "center",
            width: "100%",
            maxWidth: "1100px",
            boxSizing: "border-box"
          }}
        >
          <h1
            className="header-title"
            style={{
              margin: 0,
              fontSize: "44px"
            }}
          >
            Ioanna Stamou
          </h1>
          <h2
            className="header-subtitle"
            style={{
              margin: "8px 0 0",
              fontWeight: "normal",
              fontSize: "22px"
            }}
          >
            Researcher • Software/ML
          </h2>
        </div>

        {/* CONTENT AREA WITH FIXED MIN HEIGHT */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            minHeight: "460px",
            padding: "10px 20px 40px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <Routes>
            <Route path="/skill/:skillName" element={<SkillPage />} />
            <Route path="/workingexperience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
