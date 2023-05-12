document.addEventListener('DOMContentLoaded', () => {
  const giftHorizontalItem = document.querySelector('.gifts__HorizontalItemsRow-item')

  const clone1 = giftHorizontalItem.cloneNode(true)
  const clone2 = giftHorizontalItem.cloneNode(true)
  clone2.setAttribute('style', 'margin-top: 0')
  clone1.setAttribute('style', 'margin: 0')
  const arr = [clone1, clone2]

  const showAllGiftsButton = document.querySelector('.gifts__showAllButton')
  showAllGiftsButton.addEventListener('click', e => {
    arr.map(item => {
      giftHorizontalItem.after(item)
      showAllGiftsButton.remove()
    })
  })
})