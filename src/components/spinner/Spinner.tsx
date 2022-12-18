import { FC } from 'react';
import styles from './style.module.scss';

export const Spinner: FC = () => (
  <div className={styles.spinner} />
)

export const SpinnerContainer: FC = () => (
  <div className={styles.spinnersContainer}>
    <Spinner />
    <Spinner />
    <Spinner />
  </div>
)
