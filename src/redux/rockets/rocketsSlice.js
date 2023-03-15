import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';


const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  rocketList: [
  ],
  status: 'idle',
  error: null,
};

/* eslint no-param-reassign: "error" */

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    addRocket: (state, action) => {
      const newState = {
        state,
        bookList: [...state.bookList,
          { ...action.payload }],
      };
      return newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newRocketList = [];
        Object.keys(action.payload).forEach((el) => {
          const newRocket = {
            id: action.payload[el].id,
            rocketName: action.payload[el].name,
            description: action.payload[el].description,
            flickrImages: action.payload[el].flickr_images[1],
          };
          newRocketList.push(newRocket); 
        });
        state.rocketList = newRocketList; 

      });
  },

});

export const { addRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
