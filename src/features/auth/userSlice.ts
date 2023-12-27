import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../app/axiosInstance";
import { ActionCreatorTitle, apiConstants, STRING } from "../../constants";
import toast from "react-hot-toast";
import { setDataToLocalStorage } from "../../utils/helper";

const initialState: any = {
  loading: false,
  error: null,
  user: null,
};

export const getUserProfile = createAsyncThunk(
  ActionCreatorTitle.PROFILE,
  async () => {
    const { data } = await axiosInstance.get(apiConstants.PROFILE);

    return data;
  }
);

const userSlice = createSlice({
  name: STRING.USER_AUTH,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getUserProfile.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.user = action.payload.data;
          state.error = null;
        }
      )
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.user = null;
        if (action.error.message === STRING.REQUESTFAILED400) {
          state.error = STRING.ACCESSDENIED;
          toast.error(STRING.ACCESSDENIED);
        } else {
          state.error = action.error.message || null;
        }
      });
  },
  reducers: {},
});

export default userSlice.reducer;
