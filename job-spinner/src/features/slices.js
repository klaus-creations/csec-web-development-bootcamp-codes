import { createSlice } from "@reduxjs/toolkit";

const savedJobsFromLocalStorage =
  JSON.parse(localStorage.getItem("savedJobs")) || [];
const savedJobIdsFromLocalStorage =
  JSON.parse(localStorage.getItem("savedJobIds")) || [];

const userData = JSON.parse(localStorage.getItem("data")) || {};

const logged = JSON.parse(localStorage.getItem("logged")) || false;

const initialState = {
  searchValue: "",
  savedJobs: savedJobsFromLocalStorage,
  savedJobIds: savedJobIdsFromLocalStorage,
  data: userData,
  auth: logged,
};

const slices = createSlice({
  name: "slice",
  initialState,
  reducers: {
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    addJobs: (state, action) => {
      const newJob = action.payload;

      state.savedJobs = [...state.savedJobs, newJob];
      state.savedJobIds = [...state.savedJobIds, newJob.id];

      localStorage.setItem("savedJobs", JSON.stringify(state.savedJobs));
      localStorage.setItem("savedJobIds", JSON.stringify(state.savedJobIds));
    },
    removeJobs: (state, action) => {
      const jobIdToRemove = action.payload;

      state.savedJobs = state.savedJobs.filter(
        (post) => post.id !== jobIdToRemove
      );
      state.savedJobIds = state.savedJobIds.filter(
        (id) => id !== jobIdToRemove
      );

      localStorage.setItem("savedJobs", JSON.stringify(state.savedJobs));
      localStorage.setItem("savedJobIds", JSON.stringify(state.savedJobIds));
    },

    setData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("data", JSON.stringify(action.payload));
    },

    toggleLogged: (state, action) => {
      state.auth = action.payload;
      localStorage.setItem("logged", JSON.stringify(state.auth));
    },
  },
});

export default slices.reducer;
export const { changeSearchValue, addJobs, removeJobs, setData, toggleLogged } =
  slices.actions;
