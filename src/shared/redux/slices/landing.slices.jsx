import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import LandingServices from "../services/landing.services";


export const CreateCurrencyPair = createAsyncThunk(
  "landing/createCurrency",
  async (body,thunkAPI) => {
    try {
      const data = await LandingServices.AddGetAllCurrencyPair(
         body
      );
      return { landing: data?.data };
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

export const GetCurrencyPair = createAsyncThunk(
  "landing/getCurrency",
  async (thunkAPI) => {
    try {
      const data = await LandingServices.GetCurrencyPair();
      console.log("data",data)
      return { landing: data?.data };
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
  addAllCurrencyData:null,
  getAllCurrencyData:null,
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateCurrencyPair.fulfilled, (state, action) => {
      state.addAllCurrencyData = action.payload.landing;
    })
    builder.addCase(CreateCurrencyPair.rejected, (state, action) => {
      state.addAllCurrencyData = null;
    })

    builder.addCase(GetCurrencyPair.fulfilled, (state, action) => {
      state.getAllCurrencyData = action.payload.landing;
    })
    builder.addCase(GetCurrencyPair.rejected, (state, action) => {
      state.getAllCurrencyData = null;
    })
  },
});

const { reducer } = landingSlice;
export default reducer;