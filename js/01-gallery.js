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
    <li class="gallery__item">
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
    if (event.target.nodeName !== 'IMG') return;

    // Присвоюємо в зміну посилання на оригінальну картинку
    const originalImage = event.target.dataset.source;

    // Модальне вікно
    const instance = basicLightbox.create(
    `<img class="gallery__image" src="${originalImage}">`
    )
    instance.show()
    
    console.log(instance)
}
