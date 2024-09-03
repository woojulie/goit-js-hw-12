export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => {
      return `
        <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
      <img class="gallery-img" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <ul class="img-info">
        <li class="info-list-item">
          <p class="info-text">Likes</p>
          <p class="info-item">${image.likes}</p>
        </li>
        <li class="info-list-item">
          <p class="info-text">Views</p>
          <p class="info-item">${image.views}</p>
        </li>
        <li class="info-list-item">
           <p class="info-text">Comments</p>
          <p class="info-item">${image.comments}</p>
        </li>
        <li class="info-list-item">
          <p class="info-text">Downloads</p>
          <p class="info-item">${image.downloads}</p>
        </li>
      </ul>
    </li>
        `;
    }).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
    document.querySelector('.gallery').innerHTML = '';
}
