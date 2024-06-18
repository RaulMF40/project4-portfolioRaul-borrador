import './ToggleButton.css'

const ToggleButton = () => {
  return `
    <button id="toggleButton" class="toggle-button">Mostrar Experiencia</button>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleButton')
  const experience = document.getElementById('experience')
  const studies = document.getElementById('studies')

  button.addEventListener('click', () => {
    if (experience.style.display === 'none') {
      experience.style.display = 'block'
      studies.style.display = 'none'
      button.textContent = 'Mostrar Estudios'
    } else {
      experience.style.display = 'none'
      studies.style.display = 'block'
      button.textContent = 'Mostrar Experiencia'
    }
  })

  experience.style.display = 'block'
  studies.style.display = 'none'
})

export default ToggleButton
