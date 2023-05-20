document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.ticker__wrapper')
  const moveContainer = document.querySelector('.ticker__wrapper-moveContainer')

  const smallColumn = document.getElementsByClassName('ticker__wrapper-smallColumn-itemWrapper')
  const largeColumn = document.getElementsByClassName('ticker__wrapper-largeColumn-itemWrapper')

  /* Clone columns to make it infinite */
  smallColumn[0].after(smallColumn[0].cloneNode(true))
  largeColumn[0].after(largeColumn[0].cloneNode(true))

  $('.marquee__Small').marquee({
    allowCss3Support: true,
    css3easing: 'linear',
    easing: 'linear',
    delayBeforeStart: 0,
    direction: 'up',
    duplicated: true,
    duration: 150000,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: true,
  });

  $('.marquee__Large').marquee({
    allowCss3Support: true,
    css3easing: 'linear',
    easing: 'linear',
    delayBeforeStart: 0,
    direction: 'up',
    duplicated: true,
    duration: 150000,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: true,
  });

  $(".ticker__wrapper-moveContainer").draggable({
    axis: "y"
  });

  $('.marquee__Small').marquee('pause')
  $('.marquee__Large').marquee('pause')

  document.addEventListener('scroll', () => {
    if ((moveContainer.getBoundingClientRect().top - window.innerHeight) < -10) {
      $('.marquee__Small').marquee('resume')
      $('.marquee__Large').marquee('resume')
    }
  })

  const reinitMarquee = () => {
    if (window.innerWidth <= 768) {
      $('.marquee__Small').marquee('destroy')
      $('.marquee__Large').marquee('destroy')

      $('.marquee__Small').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'up',
        duplicated: true,
        duration: 300000,
        gap: 20,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: true,
      });
    } else {
      $('.marquee__Small').marquee('destroy')
      $('.marquee__Large').marquee('destroy')

      $('.marquee__Small').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'up',
        duplicated: true,
        duration: 150000,
        gap: 20,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: true,
      });

      $('.marquee__Large').marquee({
        allowCss3Support: true,
        css3easing: 'linear',
        easing: 'linear',
        delayBeforeStart: 0,
        direction: 'up',
        duplicated: true,
        duration: 150000,
        gap: 20,
        pauseOnCycle: false,
        pauseOnHover: false,
        startVisible: true,
      });
    }
  }

  reinitMarquee()
  window.addEventListener('resize', () => {
    reinitMarquee()
  })
})