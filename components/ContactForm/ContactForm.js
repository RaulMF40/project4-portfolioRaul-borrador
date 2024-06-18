import './ContactForm.css'

let isContactFormVisible = false // Variable para controlar el estado del formulario de contacto

window.toggleContactForm = () => {
  const form = document.getElementById('contactForm')
  const contactLinks = document.querySelector('.contact-links')
  const contactToggleButton = document.querySelector('.contact .toggle-button') // Obtener el botón de contacto

  isContactFormVisible = !isContactFormVisible // Cambiar el estado del formulario de contacto

  if (isContactFormVisible) {
    // Mostrar el formulario de contacto
    form.classList.remove('hidden')
    contactLinks.classList.add('hidden') // Ocultar los enlaces de redes sociales
    contactToggleButton.textContent = 'Mostrar Redes Sociales' // Actualizar el texto del botón de contacto
  } else {
    // Mostrar los enlaces de redes sociales
    form.classList.add('hidden')
    contactLinks.classList.remove('hidden')
    contactToggleButton.textContent = 'Mostrar Formulario' // Actualizar el texto del botón de contacto
  }
}

const ContactForm = () => {
  return `
    <section id="contact" class="contact">
      <h2>Contacto</h2>
      <button class="toggle-button" onclick="toggleContactForm()">Mostrar Formulario</button>
      <form id="contactForm" class="contact-form hidden">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div class="contact-links">
        <ul>
          <li>
            <a href="https://github.com/RaulMF40" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ra%C3%BAl-moya-fuentes-b2637a46/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </section>
  `
}

export default ContactForm
