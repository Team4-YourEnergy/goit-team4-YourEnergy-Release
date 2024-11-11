import {fetchAndRenderFavorites} from '../favorites';

export function removeFromFavorites(exerciseId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(item => item.id !== exerciseId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  if (currentPath.includes('favorites')) {
    fetchAndRenderFavorites();
  }
}
