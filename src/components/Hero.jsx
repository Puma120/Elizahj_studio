import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1><span className="cursive-brand">Elizahj</span></h1>
        <h2>Casa de modas & Diseño</h2>
        <p>Creando moda única que refleja tu personalidad</p>
        <a href="#collections" className="btn-primary">Ver Colecciones</a>
      </div>
    </section>
  );
};

export default Hero;
