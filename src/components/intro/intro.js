document.addEventListener('DOMContentLoaded', () => {
  const H1 = document.querySelector('.intro__title')
  const H1InitialInnerHTML = H1.innerHTML

  const changeH1Text = () => {
    if (window.innerWidth <= 768) {
      H1.innerHTML = `
      <span class="intro__title-row">
        <span class="intro__title-accent1">Turn Your Story</span> into<br>
         a <span class="intro__title-accent2">Comics</span>
            Masterpiece!
        </span>
      <span class="intro__title-row">
        Perfect Gift for any<br>
        occasion.
      </span>
      `
    } else {
      H1.innerHTML = H1InitialInnerHTML
    }
  }

  changeH1Text()
  window.addEventListener('resize', () => {
    changeH1Text()
  })
})