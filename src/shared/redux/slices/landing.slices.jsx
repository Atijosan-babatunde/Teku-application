import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import LandingServices from "../services/landing.services";


export const CreateCurrencyPair = createAsyncThunk(
  "landing/createCurrency",
  async (body, thunkAPI) => {
    try {
      const data = await LandingServices.AddGetAllCurrencyPair(
        body
      );
      return { landing: data };
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
      return { landing: data.data };
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

export const GetCurrencyCode = createAsyncThunk(
  "landing/getCurrencyCode",
  async (thunkAPI) => {
    try {
      const data = await LandingServices.GetCurrencyCode();
      return { landing: data.data };
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

export const GetCurrencyRate = createAsyncThunk(
  "landing/getCurrencyRate",
  async (thunkAPI) => {
    try {
      const data = await LandingServices.GetCurrencyRate();
      return { landing: data.data };
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

export const LoginUser = createAsyncThunk(
  "landing/loginUser",
  async (body, thunkAPI) => {
    try {
      const data = await LandingServices.LoginUser(
        body
      );
      return { landing: data };
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
  addAllCurrencyData: null,
  getAllCurrencyData: null,
  getAllCurrencyCode: null,
  getAllCurrencyRate: null,
  getloginUser: null,
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CreateCurrencyPair.fulfilled, (state, action) => {
      state.addAllCurrencyData = action.payload.landing;
    })
    builder.addCase(CreateCurrencyPair.rejected, (state) => {
      state.addAllCurrencyData = null;
    })

    builder.addCase(GetCurrencyPair.fulfilled, (state, action) => {
      state.getAllCurrencyData = action.payload.landing;
    })
    builder.addCase(GetCurrencyPair.rejected, (state) => {
      state.getAllCurrencyData = null;
    })

    builder.addCase(GetCurrencyCode.fulfilled, (state, action) => {
      state.getAllCurrencyCode = action.payload.landing;
    })
    builder.addCase(GetCurrencyCode.rejected, (state) => {
      state.getAllCurrencyCode = null;
    })

    builder.addCase(GetCurrencyRate.fulfilled, (state, action) => {
      state.getAllCurrencyRate = action.payload.landing;
    })
    builder.addCase(GetCurrencyRate.rejected, (state) => {
      state.getAllCurrencyRate = null;
    })

    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.getloginUser = action.payload.landing;
    })
    builder.addCase(LoginUser.rejected, (state) => {
      state.getloginUser = null;
    })
  }
});

const { reducer } = landingSlice;
export default reducer;