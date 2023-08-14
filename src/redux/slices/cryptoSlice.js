import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'api.coincap.io/v2/assets';
export const getTokens = createAsyncThunk('tokens/getTokens', async (_, thunkAPI) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    const errorMsg = `${error.code}: ${error.msg}`;
    return thunkAPI.rejectWithValue(errorMsg);
  }
});

const initialState = {
  cryptoArray: [],
  isLoading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTokens.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTokens.fulfilled, (state, action) => {
        state.cryptoArray = action.payload;
        console.log(state.cryptoArray);
      })
      .addCase(getTokens.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default cryptoSlice.reducer;
