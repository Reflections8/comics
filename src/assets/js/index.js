document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
  });

  // Animated images (in frame)
  const imagesInFrames = document.querySelectorAll('.animatedImg')

  // Animated images (frameless)
  const imagesFrameless = document.querySelectorAll('.animatedImg--Frameless')

  document.addEventListener('scroll', e => {
    imagesInFrames.forEach(img => {
      if ((img.getBoundingClientRect().top - window.innerHeight) <= 0) {
        img.classList.add('animatedImgActive')
      }
    })

    imagesFrameless.forEach(img => {
      if ((img.getBoundingClientRect().top - window.innerHeight) <= 0) {
        img.classList.add('animatedImg--FramelessActive')
      }
    })
  })
})