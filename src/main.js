import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let query = '';
let page = 1;
let totalHits = 0;

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('#load-more-btn');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  gallery.innerHTML = '';
  loadMoreBtn.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
  
  query = event.currentTarget.elements.user_query.value.trim();
  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Please enter a search query.' });
    loader.classList.add('is-hidden');
    return;
  }
  
  page = 1;

  try {
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;
    
    if (totalHits === 0) {
      iziToast.info({ title: 'No results', message: 'No images found. Please try another search.' });
      loader.classList.add('is-hidden');
      return;
    }
    
    renderImages(data.hits);
    lightbox.refresh();
    
    if (totalHits > 15) {
      loadMoreBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({ title: 'Error', message: 'Failed to fetch images. Please try again later.' });
  } finally {
    loader.classList.add('is-hidden');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  
  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    lightbox.refresh();
    
    const { height: cardHeight } = document.querySelector('.gallery-item').getBoundingClientRect();
    window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth'
});
    const loadedImagesCount = document.querySelectorAll('.gallery-item').length;
    if (Math.ceil(totalHits / 15) === page) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.info({ title: 'End of results', message: "We're sorry, but you've reached the end of search results." });
    }
  } catch (error) {
    console.error('Error loading more images:', error);
    iziToast.error({ title: 'Error', message: 'Failed to load more images. Please try again later.' });
  }
});