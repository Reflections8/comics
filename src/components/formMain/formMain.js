document.addEventListener('DOMContentLoaded', () => {

  /* Main form */
  const mainForm = document.querySelector('.formMain__inner-formSection-form')
  mainForm.addEventListener('submit', async e => {
    e.preventDefault()

    /* Primitive required validation */
    const thisInputs = e.target.querySelectorAll('input')

    Array.from(thisInputs).filter(input => input.hasAttribute('required'))

    thisInputs.forEach(input => {
      if (input.hasAttribute('required')) {
        Boolean(input.value.trim())
      }
    })

    const response = await fetch('src/phpHandlers/mainForm.php', {
      method: 'POST',
      body: new FormData(mainForm)
    })

  })
})