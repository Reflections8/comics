document.addEventListener('DOMContentLoaded', () => {
  const giftsHorizontalRow = document.querySelector('.gifts__HorizontalItemsRow')
  const showAllGiftsButton = document.querySelector('.gifts__showAllButton')

  /* Fetch gifts from data.json */
  showAllGiftsButton.addEventListener('click', () => {
    fetch('src/components/gifts/data.json')
      .then(res => res.json())
      .then(res => {
        res.map(item => {

          const renderAttributes = () => {
            return(
              item.attributes.map(attribute => {
                return(
                  `
                  <p class="gifts__item-attributes-item">
                    ${attribute.text}
                  </p>
                  `
                )
              }).join('')
            )
          }

          giftsHorizontalRow.insertAdjacentHTML('beforeend', `
          <a href=${item.link} class="gifts__item gifts__HorizontalItemsRow-item gifts__HorizontalItemsRow-itemRendered gifts__HorizontalItemsRow-itemRenderedActive">

            <img src=${item.imageSrc}
                 alt="comics"
                 class="gifts__item-img gifts__HorizontalItemsRow-item-img">

            <div class="gifts__HorizontalItemsRow-item-content">
                <div class="gifts__item-title">
                    ${item.title}
                </div>

                <div class="gifts__item-attributes">
                    ${renderAttributes()}
                </div>

                <button class="fw-bold btn-main gifts__item-button gifts__item-buttonSimple">
                    <span class="gifts__item-buttonSimple-text">
                        ${item.buttonText}
                    </span>
                </button>
            </div>
          </a>
          `)
        })
        showAllGiftsButton.setAttribute('style', 'display: none;')
      })
      .catch(e => {
        throw new Error(e)
      })
  })

})