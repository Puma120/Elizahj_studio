import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
      // Configura tu cuenta de EmailJS
    // Necesitarás crear una cuenta en emailjs.com, crear un servicio y una plantilla
    const serviceId = 'service_718h25f'; // Tu Service ID actual
    const templateId = 'template_455q2pe'; // Reemplaza con el ID real que te da EmailJS
    const userId = '9ASHY49fDgKmq-_JP'; // Reemplaza con tu User ID de EmailJS

    const templateParams = {
      to_email: 'pumaurbina120@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({
          submitted: true,
          success: true,
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
        });
        // Limpiar el formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus({
          submitted: true,
          success: false,
          message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente por teléfono.'
        });
        setLoading(false);
      });
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contáctanos</h2>
          <div className="divider"></div>
          <p>Estamos aquí para responder a tus preguntas y ayudarte a encontrar el diseño perfecto</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <h3>Información de Contacto</h3>
              <p>
                Estamos siempre disponibles para atender tus consultas y agendar citas para que puedas conocer nuestras colecciones en persona.
              </p>
              
              <ul className="contact-list">
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+52 55 1234 5678</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@elizahjstudio.com</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Av. 21 Ote. 414, El Carmen, 72530 Heroica Puebla de Zaragoza, Pue.</span>
                </li>
              </ul>
              
              <div className="social-links">
                <h4>Síguenos en Redes</h4>
                <div className="social-icons">
                  <a href="https://instagram.com/elizahj_studio" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://facebook.com/elizahj.studio" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://pinterest.com/elizahjstudio" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
            <div className="contact-form-container">
            {status.submitted ? (
              <div className={`form-message ${status.success ? 'success' : 'error'}`}>
                <p>{status.message}</p>
                {!status.success && (
                  <button 
                    className="try-again-btn"
                    onClick={() => setStatus({ submitted: false, success: false, message: '' })}
                  >
                    Intentar nuevamente
                  </button>
                )}
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
