import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../app/axiosInstance";
import { ActionCreatorTitle, apiConstants, STRING } from "../../constants";
import toast from "react-hot-toast";

interface CourseFormValues {
  courseName: string;
  description: string;
  courseImg: string;
  courseDiscount: number;
  courseCategories: string;
  coursePrice: number;
  coursePdf: string;
}

const initialState: any = {
  loading: false,
  error: null,
  course: null,
};

export const addCourse = createAsyncThunk(
  ActionCreatorTitle.ADD_COURSE,
  async (courseData: CourseFormValues) => {
    const { data } = await axiosInstance.post(apiConstants.COURSE, courseData);

    return data;
  }
);

const addCourseSlice = createSlice({
  name: ActionCreatorTitle.ADD_COURSE,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.course = action.payload;
        console.log(action.payload);
        toast.success(action.payload.message);
        state.error = null;
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.course = null;
        state.error = action.error.message || null;
        toast.error("Failed to add course");
      });
  },
  reducers: {},
});

export default addCourseSlice.reducer;
