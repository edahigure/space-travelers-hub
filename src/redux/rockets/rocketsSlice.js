import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchBooks', async () => {
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

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { id } = action.payload;

      const newRocketList = state.rocketList.map((rocket) => {
        if (rocket.id !== id) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
      return { rocketList: newRocketList, status: state.status };
    },
    cancelRocket: (state, action) => {
      const { id } = action.payload;

      const newRocketList = state.rocketList.map((rocket) => {
        if (rocket.id !== id) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
      return { rocketList: newRocketList, status: state.status };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
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
        return { rocketList: newRocketList, status: 'succeeded' };
      });
  },

});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
