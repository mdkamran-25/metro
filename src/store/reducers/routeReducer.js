import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

/* 🔹 Search Stations */
export const searchStations = createAsyncThunk(
  "stations/search",
  async (query, { rejectWithValue }) => {
    try {
      const res = await api.get(`/stations/search?q=${query}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


export const findRoute  = createAsyncThunk(
  "route/fetch",
  async ({ fromStation, toStation }, { rejectWithValue }) => {
    // console.log("fromStation", fromStation);
    // console.log("toStation", toStation);
    try {
      const res = await api.post(`/route`, {
        origin: fromStation,
        destination: toStation
      });

      // console.log("res1222", res);
      
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);




const stationsSlice = createSlice({
  name: "stations",
  initialState: {
    stations: [],   
    routeData: [],           // ✅ FIXED
    searchStationsData: [],
    loading: false,
    loadingRoute: false,
    loadingFare: false,
    error: null,
  },
  reducers: {
    setStations(state, action) {
      state.stations = action.payload;
      state.searchStationsData = action.payload;
    },
    resetFilteredStations(state) {
      state.searchStationsData = state.stations;
    },
  
  },
  extraReducers: (builder) => {
    builder
      /* ===== SEARCH ===== */
      .addCase(searchStations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchStations.fulfilled, (state, action) => {
        state.loading = false;
        state.searchStationsData = action.payload; // ✅ FIXED
      })
      .addCase(searchStations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== FIND ROUTE ===== */
      .addCase(findRoute.pending, (state) => {
        state.loadingRoute = true;
        state.error = null;
      })
      .addCase(findRoute.fulfilled, (state, action) => {
        state.loadingRoute = false;
        state.routeData = action.payload;
      })
      .addCase(findRoute.rejected, (state, action) => {
        state.loadingRoute = false;
        state.error = action.payload;
      })

  },
});

export const {
  setStations,
  resetFilteredStations,
  resetRoute,          // ✅ FIXED EXPORT
} = stationsSlice.actions;

export default stationsSlice.reducer;
