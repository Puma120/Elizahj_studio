import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>ELIZAHJ STUDIO</h2>
            <p>Elegancia y diseño en cada prenda</p>
          </div>
          
          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#collections">Colecciones</a></li>
              <li><a href="#location">Ubicación</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contacto</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Av. Presidente Masaryk 123, Polanco</li>
              <li><i className="fas fa-phone"></i> +52 55 1234 5678</li>
              <li><i className="fas fa-envelope"></i> info@elizahjstudio.com</li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="https://instagram.com/elizahj_studio" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/1C4edELr6H/ " target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://pinterest.com/elizahjstudio" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Elizahj Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
