import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

////////////////////////////////////////////////////////////////////////////////////////////////////////

const galleryContainer = document.querySelector('.gallery');

function galleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
            `;}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup(galleryItems));

//////////////////////////////////////////////////////////////////////////////////////////////////////// 

galleryContainer.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(event) {
    event.preventDefault();
    const clickedImage = event.target;

    if (clickedImage.nodeName === 'IMG') {
        openImageInModal(clickedImage.dataset.source);
    }
}

function openImageInModal(imageSource) {
    const instance = basicLightbox.create(`<img src="${imageSource}" width="800" height="600">`);
    instance.show();
    window.addEventListener('keydown', onEscButtonPressed);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

function onEscButtonPressed(event) {
    if (event.code === 'Escape') {
        window.removeEventListener('keydown', onEscButtonPressed);
        closeModalHandler();
    }
}

function closeModalHandler() {
    const openedModal = document.querySelector('div.basicLightbox');
    openedModal.classList.remove('basicLightbox--visible');
    setTimeout(() => {
        document.body.removeChild(openedModal)
    }, 410);
}