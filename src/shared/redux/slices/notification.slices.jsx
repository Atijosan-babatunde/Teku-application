import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import NotificationServices from "../services/notification.services";

export const GetNotificationsData = createAsyncThunk(
  "notification/getNotificationsData",
  async (thunkAPI) => {
    try {
      const data = await NotificationServices.GetNotificationsData();
      return { notification: data };
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

export const GetInboxData = createAsyncThunk(
  "notification/getInboxData",
  async (thunkAPI) => {
    try {
      const data = await NotificationServices.GetInboxData();
      return { inbox: data };
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
  getDataNotifications: null,
  getInboxData: null,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetNotificationsData.fulfilled, (state, action) => {
      state.getDataNotifications = action.payload.notification;
    });
    builder.addCase(GetNotificationsData.rejected, (state) => {
      state.getDataNotifications = null;
    });
    
    builder.addCase(GetInboxData.fulfilled, (state, action) => {
      state.getInboxData = action.payload.inbox;
    });
    builder.addCase(GetInboxData.rejected, (state) => {
      state.getInboxData = null;
    });
  },
});

const { reducer } = notificationSlice;
export default reducer;
