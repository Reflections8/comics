document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.ticker__wrapper')
  const moveContainer = document.querySelector('.ticker__wrapper-moveContainer')

  const smallColumn = document.querySelectorAll('.ticker__wrapper-smallColumn-itemWrapper')
  const largeColumn = document.querySelectorAll('.ticker__wrapper-largeColumn-itemWrapper')

  document.addEventListener('scroll', () => {
    if ((moveContainer.getBoundingClientRect().top - window.innerHeight) < -10) {
      smallColumn.forEach(item => {
        item.classList.add('smallTicker-Animated')
      })
      largeColumn.forEach(item => {
        item.classList.add('largeTicker-Animated')
      })
    }
  })
})