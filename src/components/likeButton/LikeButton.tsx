import { EntityId } from '@reduxjs/toolkit';
import cn from 'classnames';
import React, { FC } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks';
import { toggleLike } from '../../store/slice';
import styles from './style.module.scss';

interface LikeButtonProps {
  filmId: EntityId;
  liked: boolean | undefined;
}

export const LikeButton: FC<LikeButtonProps> = ({ filmId, liked }) => {
  const dispatch = useAppDispatch();

  const buttonClass = cn({
    [styles.card__likeBtn]: true,
    [styles.card__likeBtn_liked]: liked,
    [styles.card__likeBtn_standart]: !liked,
  })

  const svgClass = cn({
    [styles.card__likeBtn__svg]: true,
    [styles.card__likeBtn__svg_liked]: liked,
  })

  const handleLike = () => {
    dispatch(toggleLike(filmId));
  };
  return (
    <button
      className={buttonClass}
      onClick={handleLike}
    >
      <AiOutlineLike
        size={40}
        className={svgClass}
      />
    </button>
  );
};
