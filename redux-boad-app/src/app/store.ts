import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import postsReducer from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
