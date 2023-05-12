document.addEventListener('DOMContentLoaded', () => {

  /* Gallery logic */
  const mainImage = document.querySelector('.Product-main__gallery-mainImgWrapper-img')

  const thumbnailsWrapper = document.querySelectorAll('.Product-main__gallery-Product-main__gallery-thumbnailsSection-imgWrapper')
  const thumbnails = document.querySelectorAll('.Product-main__gallery-Product-main__gallery-thumbnailsSection-imgWrapper-img')

  thumbnails.forEach(item => {
    item.addEventListener('click', e => {

      thumbnailsWrapper.forEach(item => {
        item.classList.remove('Product-main__activeGalleryThumbnail')
      })

      e.currentTarget.closest('div').classList.add('Product-main__activeGalleryThumbnail')

      mainImage.setAttribute('src', e.currentTarget.getAttribute('src'))
    })
  })
})