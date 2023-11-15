import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import UserServices from "../services/users.services";

export const GetUsersDatas = createAsyncThunk(
  "users/getUsersData",
  async (thunkAPI) => {
    try {
      const data = await UserServices.GetUsersDatas();
      return { users: data.data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  getUsersData: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUsersDatas.fulfilled, (state, action) => {
      state.getUsersData = action.payload.users;
    });
    builder.addCase(GetUsersDatas.rejected, (state) => {
      state.getUsersData = null;
    });
  },
});

const { reducer } = userSlice;
export default reducer;
