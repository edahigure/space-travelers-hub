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
};

/* eslint no-param-reassign: "error" */

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { id } = action.payload;

       const newRocketList = state.rocketList.map((rocket) => {
       
        if (rocket.id !== id) { 
          return { ...rocket }
        }
        return { ...rocket, reserved: true } 
      }) 
      console.log(newRocketList);
      return { rocketList: newRocketList, status: state.status }
    
    },
    cancelRocket: (state, action) => {
      const { id } = action.payload;

       const newRocketList = state.rocketList.map((rocket) => {
       
        if (rocket.id !== id) { 
          return { ...rocket }
        }
        return { ...rocket, reserved: false } 
      }) 
      console.log(newRocketList);
      return { rocketList: newRocketList, status: state.status }
    
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

export const { reserveRocket, cancelRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
