import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../entities';
import { selectors } from './default';

export const isFilteredFilms = (state: RootState) => state.films.filteredOnly;

export const getFilteredFilmsIds = createSelector(selectors.selectAll, (allFilms) => {
  return allFilms
    .filter(film => film.liked)
    .map(film => film.filmId);
});

export const getLoadingStatus = (state: RootState) => state.films.loadingStatus;
