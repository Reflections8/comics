document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header')

  /* Drawer logic */
  const drawerBackground = document.querySelector('.drawerBackground')
  const drawer = document.querySelector('.drawer')

  /* Opening classLists logic */
  const openingDrawer = () => {
    drawer.classList.remove('drawerHidden')
    drawerBackground.classList.remove('drawerBackgroundHidden')
  }
  /* Closing classLists logic */
  const closingDrawer = () => {
    drawer.classList.add('drawerHidden')
    drawerBackground.classList.add('drawerBackgroundHidden')
  }

  /* Open */
  const drawerButtons = document.querySelectorAll('[data-action="drawer"]')
  drawerButtons.forEach(button => {
    button.addEventListener('click', openingDrawer)
  })

  /* Close */
  drawerBackground.addEventListener('click', closingDrawer)

  /* Close icon mobile */
  const closeRow = document.querySelector('.drawer__closeRow')
  closeRow.addEventListener('click', closingDrawer)

  /* Mobile drawer margin */
  const setDrawerMargin = () => {
    if (window.innerWidth <= 768) {
      drawer.style.marginTop = `calc(${header.clientHeight}px - 4px)`
    } else {
      drawer.style.marginTop = '0'
    }
  }

  setDrawerMargin()
  window.addEventListener('resize', setDrawerMargin)
})