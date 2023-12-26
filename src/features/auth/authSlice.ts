import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../app/axiosInstance";
import { ActionCreatorTitle, apiConstants, STRING } from "../../constants";
import toast from "react-hot-toast";

interface authValue {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  contact_no?: string;
  city?: string;
  policy?: boolean;
  isSignup?: boolean;
}
const initialState: any = {
  loading: false,
  error: null,
  user: null,
};

export const authenticateUser = createAsyncThunk(
  ActionCreatorTitle.AUTH,
  async (authData: authValue) => {
    const postData = { ...authData };
    delete postData.isSignup;

    const { data } = await axiosInstance.post(
      authData.isSignup ? apiConstants.REGISTER : apiConstants.LOGIN,
      postData
    );

    return data;
  }
);

const authSlice = createSlice({
  name: STRING.USER_AUTH,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        authenticateUser.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.user = action.payload;
          toast.success(action.payload.message);
          state.error = null;
        }
      )
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.message === STRING.REQUESTFAILED400) {
          state.error = STRING.ACCESSDENIED;
        } else {
          state.error = action.error.message || null;
        }
      });
  },
  reducers: {},
});

export default authSlice.reducer;
