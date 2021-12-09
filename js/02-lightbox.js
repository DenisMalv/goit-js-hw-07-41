import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

gallery.insertAdjacentHTML('beforeend', createGaleryMarkup())


function createGaleryMarkup() {
    return galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`).join('')
}

const lightBox = new SimpleLightbox('.gallery a', {
    captions:true,captionSelector:'img',captionType:'attr',captionsData:`alt`,captionPosition:'bottom',captionDelay:250
});
