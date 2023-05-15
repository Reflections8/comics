document.addEventListener('DOMContentLoaded', () => {
  const header1 = document.querySelector('.header1')
  const burgerIcon = document.querySelector('.header1__burgerIcon')
  const headerPopup = document.querySelector('.headerPopup')
  const headerPopupGridRow = headerPopup.querySelector('.grid-row')

  headerPopupGridRow.setAttribute('style', `max-height: calc(100vh - ${header1.clientHeight}px)`)

  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('burgerIcon__Active')
    headerPopup.classList.toggle('headerPopup__Active')
  })
})