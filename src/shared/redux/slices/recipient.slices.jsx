import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import RecipientServices from "../services/recipient.services";



export const RecipientUser = createAsyncThunk(
  "recipient/recipientUser",
  async (body, thunkAPI) => {
    try {
      const data = await RecipientServices.RecipientUser(
        body
      );
      return { recipient: data };
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

export const GetRecipientUsersData = createAsyncThunk(
  "recipient/getRecipientData",
  async (thunkAPI) => {
    try {
      const data = await RecipientServices.GetRecipientUsersData();
      return { recipient: data.data };
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
  allRecipientUsers: null,
  getRecipientUsersData: null,
};

export const recipientSlice = createSlice({
  name: "recipient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RecipientUser.fulfilled, (state, action) => {
      state.allRecipientUsers = action.payload.recipient;
    })
    builder.addCase(RecipientUser.rejected, (state) => {
      state.allRecipientUsers = null;
    })

    builder.addCase(GetRecipientUsersData.fulfilled, (state, action) => {
      state.getRecipientUsersData = action.payload.recipient;
    })
    builder.addCase(GetRecipientUsersData.rejected, (state) => {
      state.getRecipientUsersData = null;
    })
  }
});

const { reducer } = recipientSlice;
export default reducer;