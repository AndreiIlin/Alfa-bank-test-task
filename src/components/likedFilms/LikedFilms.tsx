import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { getFilteredFilmsIds } from '../../selectors';
import { FilmCard } from '../filmCard';
import styles from './style.module.scss'

export const LikedFilms: FC = () => {
  const likedFilmsIds = useAppSelector(getFilteredFilmsIds);
  return (
    <>
      {!!likedFilmsIds.length ?
        likedFilmsIds.map(filmId => <FilmCard key={filmId} filmId={filmId} />) :
        <p className={styles.empty_filter_text}>Вы еще не добавили ни один фильм</p>
      }
    </>
  );
};
