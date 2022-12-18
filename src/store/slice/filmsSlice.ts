import { createAsyncThunk, createEntityAdapter, createSlice, EntityId, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FilmFull, FilmShort } from '../../entities';

type APIResponse = {
  pagesCount: number;
  films: FilmFull[];
}

export const getFilms = createAsyncThunk<FilmShort[], void>(
  'films/getFilms',
  async () => {
    const response = await axios.get<APIResponse>('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return response.data.films.map(film => ({
      filmId: film.filmId,
      nameRu: film.nameRu,
      posterUrlPreview: film.posterUrlPreview,
      rating: film.rating,
      year: film.year,
      liked: false,
    }));
  },
);

export const filmsAdapter = createEntityAdapter<FilmShort>({
  selectId: film => film.filmId,
});

const filmsSlice = createSlice({
  name: 'films',
  initialState: filmsAdapter.getInitialState({
    loadingStatus: 'success',
    filteredOnly: false,
  }),
  reducers: {
    removeFilm: filmsAdapter.removeOne,
    toggleLike: (state, action: PayloadAction<EntityId>) => {
      const currentFilm = state.entities[action.payload];
      if (currentFilm) {
        currentFilm.liked = !currentFilm.liked;
      }
    },
    toggleFilter: (state) => {
      state.filteredOnly = !state.filteredOnly;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFilms.pending, state => {
        state.loadingStatus = 'loading';
      })
      .addCase(getFilms.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        filmsAdapter.addMany(state, action.payload);
      })
      .addCase(getFilms.rejected, state => {
        state.loadingStatus = 'error';
      });

  },
});

export const filmsReducer = filmsSlice.reducer;
export const { removeFilm, toggleLike, toggleFilter } = filmsSlice.actions;
