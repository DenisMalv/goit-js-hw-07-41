import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    gallery: document.querySelector('.gallery'),
    LEFT_ARROWKEY : 'ArrowLeft',
    RIGHT_ARROWKEY:'ArrowRight',
    ESC_KEY :'Escape',
}
const {gallery,LEFT_ARROWKEY,RIGHT_ARROWKEY,ESC_KEY} = refs
console.log(gallery)

gallery.insertAdjacentHTML('beforeend', createGaleryMarkup())

function createGaleryMarkup() {
    return  galleryItems.map(({ preview,original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('')
    
}

gallery.addEventListener('click',openModal)


function openModal(event) {
    event.preventDefault();

    window.addEventListener('keydown', closeModal)
    
	const modalWindowMarkup = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
        onShow: () => {
                console.log('onShow', event)                      
        },
        onClose: (event) => {
            window.removeEventListener('keydown', closeModal)
            console.log('onClose', event.visible())
        }
    })

    showModal()
    closeModal(event)

    function showModal() {
        modalWindowMarkup.show()
    }
    function closeModal(event) {
        if (event.code === ESC_KEY) {
            modalWindowMarkup.close()
        }
    }
}

   





