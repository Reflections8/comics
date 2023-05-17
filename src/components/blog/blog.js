document.addEventListener('DOMContentLoaded', () => {

  /* Custom video play button logic */
  const videoItems = document.querySelectorAll('.blog__content-item-videoWrapper')
  videoItems.forEach(item => {
    item.addEventListener('click', e => {
      const thisHTMLVideo = item.querySelector('.blog__content-item-videoWrapper-video')
      const thisPosterImg = item.querySelector('.blog__content-item-videoWrapper-poster')
      const thisCustomPlayButton = item.querySelector('.blog__content-item-videoWrapper-playButton')

      if (e.target.classList.contains('playButton')) {
        if (thisHTMLVideo.paused) {
          thisCustomPlayButton.classList.add('hidden')
          thisPosterImg.classList.add('hidden')
          thisHTMLVideo.setAttribute('controls', '')
          thisHTMLVideo.play()
        }
      }

    })
  })

})