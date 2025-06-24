import React from 'react';
import './Collections.css';

const Collections = ({ onViewCollection }) => {
  // Array de colecciones con datos de ejemplo
  const collections = [
    {
      id: 1,
      name: 'Vestidos de Noche',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Diseños frescos y elegantes para la temporada de primavera.'
    },
    {
      id: 2,
      name: 'Vestidos de Día',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Vestidos exclusivos para eventos y ocasiones especiales.'
    },
    {
      id: 3,
      name: 'Casual',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Prendas sofisticadas para el día a día con un toque de elegancia.'
    },
    {
      id: 4,
      name: 'XV`s',
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
      description: 'Nuestra línea de alta costura con piezas únicas hechas a mano.'
    },
    {
      id: 5,
      name: 'De Novia',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Complementos que realzan cualquier look con estilo y personalidad.'
    },
    {
      id: 6,
      name: 'Vito: Diseños',
      image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      description: 'Colección exclusiva con pocas unidades disponibles.'
    },
  ];

  const handleViewCollection = (id) => {
    if (onViewCollection) {
      onViewCollection(id);
    }
  };

  return (
    <section id="collections" className="collections">
      <div className="container">
        <div className="section-header">
          <h2>Nuestras Colecciones</h2>
          <div className="divider"></div>
          <p>Descubre nuestras últimas creaciones y diseños exclusivos</p>
        </div>
        
        <div className="collections-grid">
          {collections.map((collection) => (
            <div className="collection-item" key={collection.id}>
              <div className="collection-image">
                <img src={collection.image} alt={collection.name} />
                <div className="collection-overlay">
                  <button 
                    onClick={() => handleViewCollection(collection.id)}
                    className="btn-view"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
              <div className="collection-info">
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
