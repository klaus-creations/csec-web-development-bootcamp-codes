import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices";

const store = configureStore({
  reducer: {
    slice: slices,
  },
});

export default store;
