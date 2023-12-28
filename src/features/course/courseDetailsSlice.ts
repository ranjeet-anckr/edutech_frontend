import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../app/axiosInstance";
import { ActionCreatorTitle, apiConstants, STRING } from "../../constants";

interface CourseState {
  loading: boolean;
  error: string | null;
  courseDetails: [] | null;
}

const initialState: CourseState = {
  loading: false,
  error: null,
  courseDetails: null,
};

export const getCourseDetails = createAsyncThunk<any, number>(
  ActionCreatorTitle.COURSEDETAILS,
  async (id: number) => {
    const { data } = await axiosInstance.get<any>(
      `${apiConstants.COURSE_DETAILS}/${id}`
    );
    return data;
  }
);

const courseDetailsSlice = createSlice({
  name: STRING.GET_COURSE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getCourseDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.courseDetails = action.payload.data;
          state.error = null;
        }
      )
      .addCase(getCourseDetails.rejected, (state, action) => {
        state.loading = false;
        console.error(action.error);
        state.error = action.error.message || "Failed to fetch courses";
        state.courseDetails = null;
      });
  },
});

export default courseDetailsSlice.reducer;
