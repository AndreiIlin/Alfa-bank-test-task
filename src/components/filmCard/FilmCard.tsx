import { EntityId } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { selectors } from '../../selectors';
import { LikeButton } from '../likeButton';
import { RemoveButton } from '../removeButton';
import styles from './style.module.scss';

interface FilmCardProps {
  filmId: EntityId;
}

export const FilmCard: FC<FilmCardProps> = ({ filmId }) => {
  const film = useAppSelector(store => selectors.selectById(store, filmId));
  return (
    <div className={styles.card}>
      <div className={styles.card__img_container}>
        <img src={film?.posterUrlPreview} alt={film?.nameRu as string} className={styles.card__img} />
      </div>
      <div className={styles.card__text_container}>
        <h3 className={styles.card__title}>{film?.nameRu} ({film?.year})</h3>
        <LikeButton filmId={filmId} liked={film?.liked} />
        <RemoveButton filmId={filmId} />
      </div>
    </div>
  );
};
