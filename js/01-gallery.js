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
gallery.addEventListener('keydown', _.throttle(onPressArrowButtonChangeImage, 200))
let currentIndex = 0

function openModal(event) {
    event.preventDefault();

    window.addEventListener('keydown', closeModal)

    const modalWindowMarkup = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
        onShow:  ()=>console.log('onShow'),
        onClose: () => {
            window.removeEventListener('keydown', closeModal)
            console.log('onClose')
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

function onPressArrowButtonChangeImage(event) {

    const modal = document.querySelector('.basicLightbox')
    const imageModal = modal.querySelector('img')
        galleryItems.map((element, idx) => {
            if (element.original === imageModal.src) {
                currentIndex = idx
            }
        })
        console.log(currentIndex)
        if (event.code === LEFT_ARROWKEY) {
            currentIndex -= 1
            if (currentIndex < 0) {
            currentIndex = galleryItems.length-1
            }
        }
         
        if (event.code === RIGHT_ARROWKEY) {
            currentIndex += 1
             if (currentIndex > galleryItems.length-1) {
            currentIndex = 0
        }
        }
        
    imageModal.src = galleryItems[currentIndex].original
       
    }

   





