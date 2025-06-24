import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="section-header">
          <h2>Ubicación</h2>
          <div className="divider"></div>
          <p>Visítanos en nuestro taller para cotizar tu diseño</p>
        </div>
        
        <div className="location-content">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.330043788478!2d-98.19956294243286!3d19.034853844570065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0ea077295ff%3A0xa5cce20815b055e7!2sAv.%2021%20Ote.%20414%2C%20El%20Carmen%2C%2072530%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1749871434603!5m2!1ses-419!2smx"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Elizahj Studio"
            ></iframe>
          </div>
          
          <div className="address-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h3>Dirección</h3>
                <p>Av. 21 Ote. 414, El Carmen</p>
                <p>Puebla de Zaragoza, Pue, CP 72530</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-text">
                <h3>Horario</h3>
                <p>Lunes a Viernes: 10:00 AM - 7:00 PM</p>
                <p>Sábados: 11:00 AM - 4:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-text">
                <h3>Contacto</h3>
                <p>Teléfono: +52 55 1234 5678</p>
                <p>Email: info@elizahjstudio.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
