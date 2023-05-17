document.addEventListener('DOMContentLoaded', () => {
  const H1 = document.querySelector('.intro__title')
  const H1InitialInnerHTML = H1.innerHTML

  const changeH1Text = () => {
    if (window.innerWidth <= 768) {
      H1.innerHTML = `
      <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            >
        <span class="intro__title-accent1">Turn Your Story</span> into<br>
         a <span class="intro__title-accent2">Comics</span>
            Masterpiece!
        </span>
      <span class="intro__title-row"  data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
            >
        Perfect Gift for any<br>
        occasion.
      </span>
      `
    } else {
      H1.innerHTML = `
      <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200">
            Unleash Imagination and Transform
       </span>
       <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400">
       <span class="intro__title-accent1">Your Story</span> into a <span class="intro__title-accent2">Comics</span>
            Masterpiece!
       </span>
       <span class="intro__title-row"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600">
            Gift for any occasion.

            <img src="src/images/intro__header-blob.png"
                 alt="blob"
                 class="intro__title-row-blob">
       </span>
      `
    }
  }

  changeH1Text()
  window.addEventListener('resize', () => {
    // TODO: resize only when breakpoint 768 triggers (both sides)
    changeH1Text()
  })
})