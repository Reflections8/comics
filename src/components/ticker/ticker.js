document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.ticker__wrapper')
  const moveContainer = document.querySelector('.ticker__wrapper-moveContainer')

  const smallColumn = document.getElementsByClassName('ticker__wrapper-smallColumn-itemWrapper')
  const largeColumn = document.getElementsByClassName('ticker__wrapper-largeColumn-itemWrapper')

  /* Clone columns to make it infinite */
  smallColumn[0].after(smallColumn[0].cloneNode(true))
  largeColumn[0].after(largeColumn[0].cloneNode(true))


  /* Start animation when tickers wrapper is in viewport */
  let speed = 40
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      speed = 10
    } else {
      speed = 40
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

  /* Click-event info */
  let isClicked = false
  let clickedPositionY = null
  let topDifference = 0
  let currentTopValue

  /* Pause column animation when mousedown event triggers */

  const eventListenerType = (() => navigator.maxTouchPoints ? ['touchstart', 'touchend'] : ['mousedown', 'mouseup'])()
  eventListenerType.map(eventType => {
    moveContainer.addEventListener(eventType, (e) => {
      const thisColumns = moveContainer.querySelectorAll('.ticker__wrapper-Column')

      thisColumns.forEach((column) => {
        if (eventType === 'mousedown' || eventType === 'touchstart') {
          isClicked = true
          clickedPositionY = e.pageY
          for (const child of column.children) {
            child.classList.add('animationPaused')
          }
        }

        if (eventType === 'mouseup' || eventType === 'touchend') {
          isClicked = false
          topDifference = e.pageY - clickedPositionY
          for (const child of column.children) {
            child.classList.remove('animationPaused')
          }
        }
      })

      // TODO: add function, that resumes animation if mouseup/touchend was not on a column element
      // TODO: resolve topDifference issue (smooth drag need)
      // TODO: try to add function, that restarts keyframe animation each time mouseup/touchend event triggers, with start position equals corrected topDifference value.

    })
  })

  /* Add <style> tag with dynamic animation duration based on speed */
  document.body.insertAdjacentHTML('beforeend', `
    <style>
        :root {
            --small-ticker-animation-duration: ${smallColumn[0].offsetHeight / speed}s;
            --large-ticker-animation-duration: ${largeColumn[0].offsetHeight / speed}s;
        }
        
        @keyframes smallTickerAnimation {
            0% {
              top: 0;
            }
            
            100% {
              top: -${smallColumn[0].offsetHeight};
            }
        }

        @keyframes largeTickerAnimation {
            0% {
              top: 0;
            }
            
            100% {
              top: -${largeColumn[0].offsetHeight};
            }
        }
    </style>
  `)

  /* Swipe logic */
  // moveContainer.addEventListener('mousemove', e => {
  //   if (isClicked) {
  //     moveContainer.style.top = `${(topDifference + (e.pageY - clickedPositionY))}px`
  //
  //   }
  // })
})