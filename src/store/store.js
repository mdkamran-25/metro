import { configureStore } from '@reduxjs/toolkit'
import metroReducer from './reducers/metroSlice'
import stationsReducer from "./reducers/routeReducer";

export const store = configureStore({
  reducer: {
    metro: metroReducer,
    stations: stationsReducer,
  },
})