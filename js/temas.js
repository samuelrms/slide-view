export default function initTemas() {
  function handleKeyboard(event) {
    if (event) document.body.classList.toggle('noturno')
  }
  const mudarCor = document.getElementsByClassName('modo-noturno')
  mudarCor[0].addEventListener('click', handleKeyboard)
}

