document.addEventListener('DOMContentLoaded', () => {

  /* Custom video play button logic */
  const videoItems = document.querySelectorAll('.blog__content-item-videoWrapper')
  videoItems.forEach(item => {
    item.addEventListener('click', e => {
      const thisHTMLVideo = item.querySelector('.blog__content-item-videoWrapper-video')
      const thisCustomPlayButton = item.querySelector('.blog__content-item-videoWrapper-playButton')

      if (e.target === thisCustomPlayButton) {
        if (thisHTMLVideo.paused) {
          thisHTMLVideo.setAttribute('controls', '')
          thisCustomPlayButton.classList.add('hidden')
          thisHTMLVideo.play()
        }
      }

    })
  })

})