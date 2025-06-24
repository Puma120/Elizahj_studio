import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CollectionDetail.css';

// Datos de ejemplo para las colecciones y sus productos
const collectionsData = {
  1: {
    id: 1,
    name: 'Primavera 2025',
    description: 'Diseños frescos y elegantes para la temporada de primavera.',
    products: [
      { id: 101, name: 'Vestido Floral', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80', price: '$120', description: 'Vestido con estampado floral, ideal para eventos diurnos.' },
      { id: 102, name: 'Blusa de Seda', image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80', price: '$85', description: 'Blusa ligera de seda con detalles bordados.' },
      { id: 103, name: 'Pantalón Palazzo', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$95', description: 'Pantalón amplio de corte palazzo en tonos pastel.' },
      { id: 104, name: 'Conjunto Primaveral', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80', price: '$160', description: 'Conjunto de dos piezas ideal para la temporada.' }
    ]
  },
  2: {
    id: 2,
    name: 'Gala Nocturna',
    description: 'Vestidos exclusivos para eventos y ocasiones especiales.',
    products: [
      { id: 201, name: 'Vestido Largo Negro', image: 'https://images.unsplash.com/photo-1596703263615-89b2baf0f0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80', price: '$250', description: 'Elegante vestido largo negro con detalles de pedrería.' },
      { id: 202, name: 'Vestido de Gala Rojo', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80', price: '$320', description: 'Espectacular vestido rojo con escote corazón y abertura lateral.' },
      { id: 203, name: 'Conjunto Smoking Femenino', image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80', price: '$290', description: 'Elegante conjunto de smoking femenino para eventos formales.' },
      { id: 204, name: 'Vestido Sirena', image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$280', description: 'Sofisticado vestido corte sirena con aplicaciones.' }
    ]
  },
  3: {
    id: 3,
    name: 'Casual Chic',
    description: 'Prendas sofisticadas para el día a día con un toque de elegancia.',
    products: [
      { id: 301, name: 'Blusa Asimétrica', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$75', description: 'Blusa con corte asimétrico y acabado sedoso.' },
      { id: 302, name: 'Pantalón de Lino', image: 'https://images.unsplash.com/photo-1551854838-212c9a5eef22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$95', description: 'Pantalón de lino de corte recto y cintura alta.' },
      { id: 303, name: 'Chaqueta Estructurada', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$120', description: 'Chaqueta con corte estructurado y botones decorativos.' },
      { id: 304, name: 'Vestido Camisero', image: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80', price: '$110', description: 'Vestido estilo camisero con cinturón a juego.' }
    ]
  },
  4: {
    id: 4,
    name: 'Atelier Couture',
    description: 'Nuestra línea de alta costura con piezas únicas hechas a mano.',
    products: [
      { id: 401, name: 'Vestido de Novia', image: 'https://images.unsplash.com/photo-1594612076104-5e636c0f1f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: 'Consultar', description: 'Vestido de novia hecho a medida con encaje francés.' },
      { id: 402, name: 'Traje de Ceremonia', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80', price: 'Consultar', description: 'Traje exclusivo para ceremonias especiales.' },
      { id: 403, name: 'Vestido de Fiesta', image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: 'Consultar', description: 'Vestido de fiesta con bordados artesanales.' },
      { id: 404, name: 'Colección Exclusiva', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80', price: 'Consultar', description: 'Piezas de edición limitada diseñadas por nuestra fundadora.' }
    ]
  },
  5: {
    id: 5,
    name: 'Accesorios',
    description: 'Complementos que realzan cualquier look con estilo y personalidad.',
    products: [
      { id: 501, name: 'Bolso de Cuero', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80', price: '$150', description: 'Bolso de cuero genuino con acabados metálicos.' },
      { id: 502, name: 'Conjunto de Joyería', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$200', description: 'Set de collar y pendientes con cristales.' },
      { id: 503, name: 'Cinturón Trenzado', image: 'https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', price: '$65', description: 'Cinturón artesanal trenzado con hebilla personalizada.' },
      { id: 504, name: 'Pañuelo de Seda', image: 'https://images.unsplash.com/photo-1633934542430-0cf3aed080c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$55', description: 'Pañuelo de seda con diseño exclusivo Elizahj.' }
    ]
  },
  6: {
    id: 6,
    name: 'Edición Limitada',
    description: 'Colección exclusiva con pocas unidades disponibles.',
    products: [
      { id: 601, name: 'Vestido Artesanal', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80', price: '$350', description: 'Vestido elaborado con técnicas artesanales, solo 10 unidades.' },
      { id: 602, name: 'Abrigo Exclusivo', image: 'https://images.unsplash.com/photo-1548624313-0396c75e3c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80', price: '$420', description: 'Abrigo de diseño único con bordados a mano, edición numerada.' },
      { id: 603, name: 'Complemento Especial', image: 'https://images.unsplash.com/photo-1613945407943-59cd755fd69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80', price: '$180', description: 'Complemento de edición especial, diseño colaborativo.' },
      { id: 604, name: 'Conjunto Premium', image: 'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', price: '$290', description: 'Conjunto premium de edición limitada firmado por la diseñadora.' }
    ]
  }
};

const CollectionDetail = ({ collectionId, onBackToHome }) => {
  const collection = collectionsData[collectionId];

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
          </div>          <div className="back-link">
            <button className="btn-back" onClick={() => onBackToHome('collections')}>Volver a todas las colecciones</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollectionDetail;
