import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

/////////////////////////////////////////////////////////////////////////////////////////////////

const galleryContainer = document.querySelector('.gallery');

function galleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            `;}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup(galleryItems));

/////////////////////////////////////////////////////////////////////////////////////////////////

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionClass: '',
});

/////////////////////////////////////////////////////////////////////////////////////////////////