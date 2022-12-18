import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { selectors } from '../../selectors';
import { FilmCard } from '../filmCard';

export const AllFilms: FC = () => {
  const filmsIds = useAppSelector(selectors.selectIds);

  return (
    <>
      {filmsIds.map(filmId => <FilmCard key={filmId} filmId={filmId} />)}
    </>
  );
};
