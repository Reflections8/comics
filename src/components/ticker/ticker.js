document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.ticker__wrapper')
  const moveContainer = document.querySelector('.ticker__wrapper-moveContainer')

  const smallColumn = document.getElementsByClassName('ticker__wrapper-smallColumn-itemWrapper')
  const largeColumn = document.getElementsByClassName('ticker__wrapper-largeColumn-itemWrapper')

  /* Clone columns to make it infinite */
  smallColumn[0].after(smallColumn[0].cloneNode(true))
  largeColumn[0].after(largeColumn[0].cloneNode(true))


  /* Start animation when tickers wrapper is in viewport */
  let speed = 50
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      speed = 15
    } else {
      speed = 50
    }
  })

  document.addEventListener('scroll', () => {
    if ((moveContainer.getBoundingClientRect().top - window.innerHeight) < -10) {
      for (const column of smallColumn) {
        column.classList.add('smallTicker-Animated')
      }

      for (const column of largeColumn) {
        column.classList.add('largeTicker-Animated')
      }
    }
  })

  /* Pause column animation when mousedown event triggers */
  const smallColumnWrapper = document.querySelector('.ticker__wrapper-smallColumn')
  const largeColumnWrapper = document.querySelector('.ticker__wrapper-largeColumn')

  const eventListenerType = (() => navigator.maxTouchPoints ? ['touchstart', 'touchend'] : ['mousedown', 'mouseup'])()
  eventListenerType.map(eventType => {
    document.addEventListener(eventType, (e) => {

      const thisColumn = e.target.closest('.ticker__wrapper-Column')
      const thisColumnChildren = thisColumn?.children

      if (thisColumn && eventType === 'mousedown' || thisColumn && eventType === 'touchstart') {
        for (const column of thisColumnChildren) {
          column.classList.add('animationPaused')
        }
      }

      if (thisColumn && eventType === 'mouseup' || thisColumn && eventType === 'touchend') {
        for (const column of thisColumnChildren) {
          column.classList.remove('animationPaused')
        }
      }

      // TODO: add function, that resumes animation if mouseup/touchend was not on a column element

    })
  })

  /* Add <style> tag with dynamic animation duration based on speed */
  document.body.insertAdjacentHTML('beforeend', `
    <style>
        :root {
            --small-ticker-animation-duration: ${smallColumn[0].offsetHeight / speed}s;
            --large-ticker-animation-duration: ${largeColumn[0].offsetHeight / speed}s;
        }
    </style>
  `)

})