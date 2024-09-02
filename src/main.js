import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
let query = '';
let page = 1;
let totalHits = 0;
let lightbox;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  query = event.currentTarget.elements.user_query.value.trim();
  if (query === '') {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }

  page = 1;
  gallery.innerHTML = ''; 
  try {
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.warning({ title: 'No results', message: 'Sorry, there are no images matching your search query.' });
      loadMoreBtn.classList.add('is-hidden');
      return;
    }

    renderImages(data.hits);
    lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
    loadMoreBtn.classList.remove('is-hidden');
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  try {
    const data = await fetchImages(query, page);

    if (data.hits.length === 0 || page * 15 >= totalHits) {
      iziToast.info({ title: 'End of results', message: "We're sorry, but you've reached the end of search results." });
      loadMoreBtn.classList.add('is-hidden');
      return;
    }

    renderImages(data.hits);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  try {
    const data = await fetchImages(query, page);

    if (data.hits.length === 0 || page * 15 >= totalHits) {
      iziToast.info({ title: 'End of results', message: "We're sorry, but you've reached the end of search results." });
      loadMoreBtn.classList.add('is-hidden');
      return;
    }

    renderImages(data.hits);
    lightbox.refresh();

    const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
});