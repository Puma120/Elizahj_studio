import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInMainPage, setIsInMainPage] = useState(false);

  // Verificar si estamos en la página principal o en una página de detalle
  useEffect(() => {
    // Si elementos con estos IDs existen, estamos en la página principal
    const homeElement = document.getElementById('home');
    setIsInMainPage(homeElement !== null);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
      // Scroll al inicio después de volver a la página principal
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNavClick = (e, section) => {
    e.preventDefault();
    
    // Si no estamos en la página principal, primero volvemos a ella
    if (!isInMainPage && onNavigateHome) {
      onNavigateHome();
      
      // Esperamos a que se cargue la página principal y luego navegamos a la sección
      setTimeout(() => {
        if (section === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 200); // Aumentamos un poco el tiempo para asegurar que la página principal se cargue
    } else {      // Si ya estamos en la página principal, simplemente navegamos a la sección
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    
    // Cerramos el menú en móvil después de hacer clic
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#" onClick={handleLogoClick}>
            <h1>Elizahj Studio</h1>
          </a>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Inicio</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Nosotros</a></li>
            <li><a href="#collections" onClick={(e) => handleNavClick(e, 'collections')}>Colecciones</a></li>
            <li><a href="#location" onClick={(e) => handleNavClick(e, 'location')}>Ubicación</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
