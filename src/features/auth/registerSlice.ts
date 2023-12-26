import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axiosInstance from "../../app/axiosInstance";
import { ActionCreatorTitle, apiConstants, STRING } from "../../constants";

const initialState: any = {
  loading: false,
  error: null,
  user: [],
};

export const signupUser = createAsyncThunk(
  ActionCreatorTitle.AUTH_SIGNUP,
  async (signupData: {
    /* signup data structure */
  }) => {
    const { data } = await axiosInstance.post(
      apiConstants.REGISTER,
      signupData
    );

    return data;
  }
);

const signupSlice = createSlice({
  name: STRING.USER_SIGNUP,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        // handle pending state
      })
      .addCase(
        signupUser.fulfilled,
        (state, action: PayloadAction<Array<any>>) => {
          // handle fulfilled state
        }
      )
      .addCase(signupUser.rejected, (state, action) => {
        // handle rejected state
      });
  },
  reducers: {},
});

export default signupSlice.reducer;
