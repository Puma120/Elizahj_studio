import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="section-header">
          <h2>Nuestra Ubicación</h2>
          <div className="divider"></div>
          <p>Visítanos en nuestro atelier y descubre todas nuestras colecciones</p>
        </div>
        
        <div className="location-content">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661956324902!2d-99.16369528541212!3d19.427023546029434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZona%20Rosa%2C%20Ju%C3%A1rez%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1655230912456!5m2!1ses-419!2smx" 
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
                <p>Av. Presidente Masaryk 123, Polanco</p>
                <p>Ciudad de México, CP 11560</p>
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
