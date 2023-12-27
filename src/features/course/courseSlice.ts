import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../app/axiosInstance";
import { ActionCreatorTitle, apiConstants, STRING } from "../../constants";

// Define the type for your course data

interface CourseState {
  loading: boolean;
  error: string | null;
  course: [] | null;
}

const initialState: CourseState = {
  loading: false,
  error: null,
  course: null,
};

export const getCourses = createAsyncThunk<any>(
  ActionCreatorTitle.COURSE,
  async () => {
    const { data } = await axiosInstance.get(apiConstants.COURSE);
    return data;
  }
);

const courseSlice = createSlice({
  name: STRING.GET_COURSE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCourses.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.course = action.payload.data;
        state.error = null;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        console.error(action.error); // Log the error for debugging
        state.error = action.error.message || "Failed to fetch courses";
        state.course = null;
      });
  },
});

export default courseSlice.reducer;
