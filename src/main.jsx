import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from 'emailjs-com'

// Inicializar EmailJS con tu User ID
// Reemplaza 'YOUR_USER_ID' con tu User ID real de EmailJS
emailjs.init('9ASHY49fDgKmq-_JP') // Mismo ID que usas en Contact.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
