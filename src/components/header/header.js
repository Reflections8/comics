document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header')
  const header1 = document.querySelector('.header1')
  const header2 = document.querySelector('.header2')
  const header2Start = document.querySelector('.header2__start')
  const header2End = document.querySelector('.header2__end')

  console.log(header.clientHeight)
  const main = document.querySelector('main')
  main.style.paddingTop = `${header.clientHeight}`
  window.addEventListener('resize', () => {
    main.style.paddingTop = `${header.clientHeight}`
  })

  if (window.innerWidth <= 768) {
    document.body.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes headerHideShow {
          0% {
            top: 0;
          }
        
          50% {
            top: -100%;
          }
        
          100% {
            top: 0;
          }
        }
    </style>
  `)
  } else {
    document.body.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes headerHideShow {
          0% {
            top: 0;
          }
        
          50% {
            top: -100%;
          }
        
          100% {
            top: -${header1.clientHeight};
          }
        }
    </style>
  `)
  }


  window.addEventListener('scroll', e => {
    if (window.scrollY > 0) {

      header2.style.backgroundColor = 'white'
      for (let child of header2Start.children) {
        child.style.borderBottom = '0'
      }
      for (let child of header2End.children) {
        child.style.borderBottom = '0'
      }

      header.classList.add('header__scrolled')
      header.classList.add('animation')

    } else if (window.scrollY === 0) {
      header.classList.remove('header__scrolled')
      header.classList.remove('animation')

      header2.style.backgroundColor = 'transparent'
      for (let child of header2Start.children) {
        child.style.borderBottom = '2px solid black'
      }
      for (let child of header2End.children) {
        child.style.borderBottom = '2px solid black'
      }
    }
  })
})