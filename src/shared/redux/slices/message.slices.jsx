import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlices = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

const { reducer, actions } = messageSlices;

export const { setMessage, clearMessage } = actions;
export default reducer;