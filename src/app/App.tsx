import { FC, useEffect } from 'react';
import { FilmsContainer } from '../components/filmsContainer';
import { FilterButton } from '../components/filterButton';
import { SpinnerContainer } from '../components/spinner/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getLoadingStatus } from '../selectors';
import { getFilms } from '../store/slice';
import styles from './style.module.scss';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(getLoadingStatus);
  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isSuccess = status === 'success';

  useEffect(() => {
    dispatch(getFilms());
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Кинопоиск топ-20</h1>
      {isLoading && <SpinnerContainer />}
      {isError && <h3 className={styles.errorMessage}>Что-то пошло не так... :( Пожалуйста, перезагрузите страницу</h3>}
      {isSuccess && <>
        <FilterButton />
        <FilmsContainer />
      </>}
    </div>
  );
};
