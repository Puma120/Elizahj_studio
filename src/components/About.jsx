import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Sobre Nosotros</h2>
          <div className="divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/LogoLetraNegraFondoBlanco.svg" alt="Elizahj Studio - Logo" />
          </div>
          
          <div className="about-text">
            <h3>Nuestra Historia</h3>
            <p>
              Elizahj Studio nace de la pasión por la moda y el diseño. Desde nuestros inicios, nos hemos comprometido a crear prendas únicas que expresen la personalidad e individualidad de cada cliente.
            </p>
            
            <p>
              Con más de 10 años de experiencia en el mundo de la alta costura, nuestro taller combina técnicas tradicionales con tendencias modernas para ofrecer diseños exclusivos de la más alta calidad.
            </p>
            
            <h3>Nuestra Filosofía</h3>
            <p>
              Creemos que cada prenda debe contar una historia. Trabajamos con materiales cuidadosamente seleccionados y prestamos atención a cada detalle para asegurar que cada creación sea perfecta.
            </p>
            
            <p>
              En Elizahj Studio, la moda no es solo lo que ves, sino lo que te hace sentir. Nos enorgullece acompañar a nuestros clientes en momentos especiales, creando prendas que perduran en el tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
