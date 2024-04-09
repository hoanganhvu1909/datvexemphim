import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    name: '',
    number: '',
  },
  display: 'none',
  selectedSeats: [],
  thongTinVe: {
    name: '',
    number: '',
    ghe: '',
  },
};

const slice = createSlice({
  name: 'datVeReducer',
  initialState,
  reducers: {
    handleOnChange(state, action) {
      const { id, value } = action.payload;
      state.value[id] = value;
    },
    handleSelect(state, action) {
      const { display } = action.payload;
      if (state.value.name === '' && state.value.number === '') {
        alert('Please Enter your Name and Number of Seats');
        state.display = 'none';
      } else {
        state.display = display;
      }
    },
    handleConfirm(state, action) {
      const { arrSeat } = action.payload;
      state.thongTinVe = { ...state.value, ghe: arrSeat.join(',') };
    },
  },
});

export const { handleOnChange, handleConfirm, handleSelect } = slice.actions;

export default slice.reducer;
