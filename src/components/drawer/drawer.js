document.addEventListener('DOMContentLoaded', () => {

  /* Drawer logic */
  const drawerBackground = document.querySelector('.drawerBackground')
  const drawer = document.querySelector('.drawer')

  /* Open */
  const drawerButtons = document.querySelectorAll('[data-action="drawer"]')
  drawerButtons.forEach(button => {
    button.addEventListener('click', () => {
      drawer.classList.remove('drawerHidden')
      drawerBackground.classList.remove('drawerBackgroundHidden')
    })
  })

  /* Close */
  drawerBackground.addEventListener('click', () => {
    drawer.classList.add('drawerHidden')
    drawerBackground.classList.add('drawerBackgroundHidden')
  })
})