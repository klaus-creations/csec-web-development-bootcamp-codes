import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices"; // Your custom slices
import jobApi from "./api"; // Your RTK Query API

const store = configureStore({
  reducer: {
    slice: slices, // Your custom reducers
    [jobApi.reducerPath]: jobApi.reducer, // RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware), // Add RTK Query middleware
});

export default store;
