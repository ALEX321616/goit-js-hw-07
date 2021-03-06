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

var lightBox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  doubleTapZoom: 1,
});
//console.log(galleryItems);
