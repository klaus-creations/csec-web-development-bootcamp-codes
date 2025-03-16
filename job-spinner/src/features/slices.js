import { createSlice } from "@reduxjs/toolkit";

const savedJobsFromLocalStorage =
  JSON.parse(localStorage.getItem("savedJobs")) || [];
const savedJobIdsFromLocalStorage =
  JSON.parse(localStorage.getItem("savedJobIds")) || [];

const userData = JSON.parse(localStorage.getItem("data")) || {};

const token = localStorage.getItem("token") || null;

const logged = JSON.parse(localStorage.getItem("logged")) || false;

const initialState = {
  searchValue: "",
  savedJobs: savedJobsFromLocalStorage,
  savedJobIds: savedJobIdsFromLocalStorage,
  data: userData,
  auth: logged,
  jobData1: {
    title: "",
    description: "",
    type: "",
    company: "",
  },
  jobData2: {
    salary: "",
    location: "",
    logo: "",
    experienceLevel: "",
    currency: "",
    isBookMarked: false,
  },
  jobs: {},
  newJobPage: 1,
  loginData: {
    name: "",
    email: "",
  },
  signupData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  signInData: {
    email: "",
    password: "",
  },

  userData: {
    token,
    name: "",
  },
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

      state.savedJobs = [newJob, ...state.savedJobs];
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
    setJobData1: (state, action) => {
      state.jobData1 = action.payload;
    },
    setJobData2: (state, action) => {
      state.jobData2 = action.payload;
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setJobPage: (state, action) => {
      state.newJobPage = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export default slices.reducer;
export const {
  changeSearchValue,
  addJobs,
  removeJobs,
  setData,
  toggleLogged,
  setJobData1,
  setJobData2,
  setJobPage,
  setUserData,
} = slices.actions;
