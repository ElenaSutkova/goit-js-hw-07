import { galleryItems } from './gallery-items.js';
// Change code below this line



// Отримуємо доступ до ul
const container = document.querySelector('.gallery');
// Додаємо розмітку до HTML, ul
container.insertAdjacentHTML('afterbegin', galleryLayout(galleryItems));
// Делегування подій
container.addEventListener('click', handlerClick)
// Створюємо розмітку 
function galleryLayout(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item js-gallery-item">
      <a class="gallery__link" href="${original}">
       <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
       />
      </a>
    </li>`).join('');
}
// Створюємо функцію прослуховувача подій
function handlerClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }

    const currentImage = event.target.closest('.js-gallery-item');
    // console.log(currentImage)

    // Модальне вікно
const instance = basicLightbox.create(`
	// <div>
    //     <img src="${galleryItems.original}" alt="${galleryItems.description}">
    // </div>
`)
instance.show()
}
console.log(instance)