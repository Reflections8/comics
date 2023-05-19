document.addEventListener('DOMContentLoaded', () => {

  /* Main form */
  const mainForm = document.querySelector('.mainForm')
  mainForm?.addEventListener('submit', async e => {
    e.preventDefault()

    /* Primitive required validation */
    let validForm = false
    const thisInputs = e.target.querySelectorAll('input')

    thisInputs.forEach(input => {
      if (input.hasAttribute('required')) {
        if (Boolean(input.value.trim())) {
          validForm = true
        } else {
          validForm = false
          input.classList.add('invalidInput')
        }

      }
    })

    if (validForm) {
      const response = await fetch('src/phpHandlers/mainForm.php', {
        method: 'POST',
        body: new FormData(mainForm)
      })

      /* TODO: Clear all text fields after 200 response */
    }
  })


  /* Drawer form */
  const drawerForm = document.querySelector('.drawerForm__form')
  drawerForm.addEventListener('submit', async e => {
    e.preventDefault()

    /* Primitive required validation */
    let validForm = false
    const thisInputs = e.target.querySelectorAll('input')

    thisInputs.forEach(input => {
      if (input.hasAttribute('required')) {
        if (Boolean(input.value.trim())) {
          validForm = true
        } else {
          validForm = false
          input.classList.add('invalidInput')
        }

      }
    })

    if (validForm) {
      const response = await fetch('src/phpHandlers/drawerForm.php', {
        method: 'POST',
        body: new FormData(drawerForm)
      })

      /* TODO: Clear all text fields after 200 response */
    }
  })
})