import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { isFilteredFilms } from '../../selectors';
import { AllFilms } from '../allFilms';
import { LikedFilms } from '../likedFilms';
import styles from './style.module.scss';

export const FilmsContainer: FC = () => {
  const isFiltered = useAppSelector(isFilteredFilms);
  return (
    <div className={styles.container}>
      {isFiltered ? <LikedFilms /> : <AllFilms />}
    </div>
  );
};
