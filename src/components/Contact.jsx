import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contáctanos</h2>
          <div className="divider"></div>
          <p>Estamos aquí para responder a tus preguntas y ayudarte a encontrar el diseño perfecto</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <h3>Información de Contacto</h3>
              <p>
                Estamos siempre disponibles para atender tus consultas y agendar citas para que puedas conocer nuestras colecciones en persona.
              </p>
              
              <ul className="contact-list">
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+52 55 1234 5678</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@elizahjstudio.com</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Av. Presidente Masaryk 123, Polanco, CDMX</span>
                </li>
              </ul>
              
              <div className="social-links">
                <h4>Síguenos en Redes</h4>
                <div className="social-icons">
                  <a href="https://instagram.com/elizahj_studio" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://facebook.com/elizahj.studio" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://pinterest.com/elizahjstudio" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
