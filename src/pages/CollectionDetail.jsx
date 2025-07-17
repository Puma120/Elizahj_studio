import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { collectionsData, priceDisclaimer } from '../data/collectionsData';
import './CollectionDetail.css';

const CollectionDetail = ({ collectionId, onBackToHome }) => {
  const [showPriceModal, setShowPriceModal] = useState(false);
  const collection = collectionsData[collectionId];

  // Mostrar el popup de precios al cargar la página si tiene productos
  React.useEffect(() => {
    if (collection && collection.products && collection.products.length > 0) {
      const timer = setTimeout(() => {
        setShowPriceModal(true);
      }, 1000); // Mostrar después de 1 segundo
      return () => clearTimeout(timer);
    }
  }, [collection]);

  if (!collection) {
    return (
      <>
        <Header onNavigateHome={onBackToHome} />        <div className="collection-not-found">
          <h2>Colección no encontrada</h2>
          <p>Lo sentimos, la colección que buscas no existe.</p>
          <button className="btn-back" onClick={() => onBackToHome('collections')}>Volver a colecciones</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header onNavigateHome={onBackToHome} />
      <div className="collection-detail">
        <div className="container">
          <div className="collection-header">
            <h1>{collection.name}</h1>
            <div className="collection-divider"></div>
            <p>{collection.description}</p>
          </div>

          <div className="product-grid">
            {collection.products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <p className="product-description">{product.description}</p>
                  <button className="btn-add-to-cart">Consultar disponibilidad</button>
                </div>
              </div>
            ))}
          </div>

          <div className="back-link">
            <button className="btn-back" onClick={() => onBackToHome('collections')}>Volver a todas las colecciones</button>
          </div>
        </div>
      </div>

      {/* Modal de información de precios */}
      {showPriceModal && (
        <div className="price-modal-overlay" onClick={() => setShowPriceModal(false)}>
          <div className="price-modal" onClick={(e) => e.stopPropagation()}>
            <div className="price-modal-header">
              <h3>{priceDisclaimer.title}</h3>
              <button 
                className="close-modal" 
                onClick={() => setShowPriceModal(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            <div className="price-modal-content">
              <p className="modal-message">{priceDisclaimer.message}</p>
              <ul className="modal-factors">
                {priceDisclaimer.factors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
              <p className="modal-note">{priceDisclaimer.note}</p>
              <div className="modal-buttons">
                <button 
                  className="btn-modal-primary" 
                  onClick={() => setShowPriceModal(false)}
                >
                  Entendido
                </button>
                <button 
                  className="btn-modal-secondary" 
                  onClick={() => {
                    setShowPriceModal(false);
                    onBackToHome('contact');
                  }}
                >
                  Contactar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CollectionDetail;
