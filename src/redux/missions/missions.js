import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { missions: [] };

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('GET/fetchMissions/fulfilled', async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const missionSlice = createSlice({
  name: 'GET',
  initialState,
  reducers: {
    toogleReserve: (state, { payload }) => {
      state.missions = state.missions.map((mission) => { // eslint-disable-line no-param-reassign
        if (mission.mission_id === payload) {
          return { ...mission, reserved: !mission.reserved };
        } return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        const newState = { missions: payload.map((x) => ({ ...x, reserved: false })) };
        return newState;
      });
  },
});

export const { toogleReserve } = missionSlice.actions;

export default missionSlice;
