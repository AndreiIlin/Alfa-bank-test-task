import cn from 'classnames';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { isFilteredFilms } from '../../selectors';
import { toggleFilter } from '../../store/slice';
import styles from './style.module.scss';

export const FilterButton = () => {
  const isFiltered = useAppSelector(isFilteredFilms);
  const dispatch = useAppDispatch();

  const buttonClass = cn({
    [styles.filterBtn]: true,
    [styles.active]: isFiltered,
  });

  const handleFilterFilms = () => {
    dispatch(toggleFilter());
  };

  return (
    <button
      className={buttonClass}
      onClick={handleFilterFilms}
    >
      {isFiltered ? 'Показать все фильмы' : 'Показать понравившиеся фильмы'}
    </button>
  );
};
