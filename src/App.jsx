import React, { useState } from 'react'
import './App.css'

// Importando los componentes que creamos
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CollectionDetail from './pages/CollectionDetail'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);

  const handleViewCollection = (id) => {
    setSelectedCollectionId(id);
    setCurrentPage('collectionDetail');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = (scrollToSection = null) => {
    setCurrentPage('home');
    setSelectedCollectionId(null);
    
    // Si se especifica una sección, hacemos scroll a ella después de volver a la página principal
    if (scrollToSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <>
          <Header onNavigateHome={handleBackToHome} />
          <main>
            <Hero />
            <About />
            <Collections onViewCollection={handleViewCollection} />
            <Location />
            <Contact />
          </main>
          <Footer />
        </>
      ) : (
        <CollectionDetail 
          collectionId={selectedCollectionId} 
          onBackToHome={handleBackToHome} 
        />
      )}
    </div>
  )
}

export default App
