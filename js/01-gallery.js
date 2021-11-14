import { galleryItems } from "./gallery-items.js";

const listGalleryEl = document.querySelector(".gallery");

const ItemsGallery = galleryItems
  .map(
    (
      item
    ) => `<li class = "gallery__item"><a class = "gallery__link"  href="${item.original}"><img class= "gallery__image" src="${item.preview}" data-source="${item.original}"
   alt="${item.description}"></a></li>`
  )
  .join("");

listGalleryEl.innerHTML = ItemsGallery;
listGalleryEl.addEventListener("click", onOpenImgClick);

function onOpenImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const url = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${url}">`, {
    onShow: (instance) => {
      window.addEventListener("keydown", (e) => {
        const ESC_KEY_CODE = "Escape";
        const isEscKey = e.code === ESC_KEY_CODE;
        if (isEscKey) {
          instance.close(() => window.removeEventListener("keydown", e));
        }
        window.removeEventListener("keydown", e);
      });
    },
  });
  instance.show();
}
console.log(galleryItems);
