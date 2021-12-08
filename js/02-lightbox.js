import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

gallery.insertAdjacentHTML('beforeend', createGaleryMarkup())

const galleryLink = [...gallery.querySelectorAll('.gallery__item')]
galleryLink.forEach(link => link.style.fontSize = 0)

function createGaleryMarkup() {
    return galleryItems.map(({ preview, original, description }) =>
        `<li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`).join('')
}

const lightBox = new SimpleLightbox('.gallery a', {
    captions:true,captionSelector:'img',captionType:'attr',captionsData:`alt`,captionPosition:'bottom',captionDelay:250
});
