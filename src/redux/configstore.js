import { configureStore } from '@reduxjs/toolkit';
import datVeReducer from './slice/datVeReducer';
export const store = configureStore({
  reducer: { datVeReducer },
});
