import { EntityId } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks';
import { removeFilm } from '../../store/slice';
import styles from './style.module.scss';

interface RemoveButtonProps {
  filmId: EntityId;
}

export const RemoveButton: FC<RemoveButtonProps> = ({ filmId }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeFilm(filmId));
  };
  return (
    <button className={styles.card__removeBtn} onClick={handleRemove}>
      <AiOutlineCloseCircle color={'#003F91'} size={30} />
    </button>
  );
};
