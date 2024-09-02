import axios from 'axios';

const API_KEY = '45718127-30771d56f6b088ceef33bd7c7';
    const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}