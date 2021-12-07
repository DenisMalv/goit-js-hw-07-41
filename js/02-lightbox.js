import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')
console.log(gallery)

gallery.insertAdjacentHTML('beforeend', createGaleryMarkup())

function createGaleryMarkup() {
    return galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`).join('')   
}

const lightBox = new SimpleLightbox('.gallery a', {
    captions:true,captionSelector:'img',captionType:'attr',captionsData:`alt`,captionPosition:'bottom',captionDelay:250
});
