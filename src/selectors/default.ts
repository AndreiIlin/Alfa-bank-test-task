import { RootState } from '../entities';
import { filmsAdapter } from '../store/slice';

export const selectors = filmsAdapter.getSelectors<RootState>(state => state.films);
