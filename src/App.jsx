import React from 'react'
import './App.css'

// Importando los componentes que creamos
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Collections />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
