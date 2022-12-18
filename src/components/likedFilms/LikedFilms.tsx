import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { getFilteredFilmsIds } from '../../selectors';
import { FilmCard } from '../filmCard';

export const LikedFilms: FC = () => {
  const likedFilmsIds = useAppSelector(getFilteredFilmsIds);
  return (
    <>
      {!!likedFilmsIds.length ?
        likedFilmsIds.map(filmId => <FilmCard key={filmId} filmId={filmId} />) :
        <p>Вы еще не добавили ни один фильм</p>
      }
    </>
  );
};
