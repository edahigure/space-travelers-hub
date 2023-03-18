import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missions';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice.reducer,
    rocket: rocketReducer,
  },
});

export default store;
