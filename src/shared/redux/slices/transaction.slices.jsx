import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import TransactionServices from "../services/transaction.services";



export const GetUsersTransaction = createAsyncThunk(
    "transaction/getUsersTransaction",
    async (thunkAPI) => {
      try {
        const data = await TransactionServices.GetUsersTransaction();
        return { transaction: data.data };
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

  export const TransactionUser = createAsyncThunk(
    "transaction/transactionUser",
    async (body, thunkAPI) => {
      try {
        const data = await TransactionServices.TransactionUser(
          body
        );
        return { transaction: data };
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

  export const GetUsersBanksListed = createAsyncThunk(
    "transaction/getBanksListed",
    async (thunkAPI) => {
      try {
        const data = await TransactionServices.GetUsersBanksListed();
        return { transaction: data.data };
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

  export const GetAllTransactionUsers = createAsyncThunk(
    "transaction/getAllTransaction",
    async (thunkAPI) => {
      try {
        const data = await TransactionServices.GetAllTransactionUsers();
        return { transaction: data.data };
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

  export const AllTransactionCart = createAsyncThunk(
    "transaction/allTransactionCart",
    async (body, thunkAPI) => {
      try {
        const data = await TransactionServices.AllTransactionCart(
          body
        );
        return { transaction: data };
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

  export const GetAllTransactionCart = createAsyncThunk(
    "transaction/getAllTransactionCart",
    async (thunkAPI) => {
      try {
        const data = await TransactionServices.GetAllTransactionCart();
        return { transaction: data.data };
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
    getTransactionUsers: null,
    allTransactionusers: null,
    getBanksListed: null,
    getAllTransaction: null,
    allTransactionCart: null,
    getAllTransactionCart: null,
  };

  export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(GetUsersTransaction.fulfilled, (state, action) => {
        state.getTransactionUsers = action.payload.transaction;
      })
      builder.addCase(GetUsersTransaction.rejected, (state) => {
        state.getTransactionUsers = null;
      })

      builder.addCase(TransactionUser.fulfilled, (state, action) => {
        state.allTransactionusers = action.payload.transaction;
      })
      builder.addCase(TransactionUser.rejected, (state) => {
        state.allTransactionusers = null;
      })

      builder.addCase(GetUsersBanksListed.fulfilled, (state, action) => {
        state.getBanksListed = action.payload.transaction;
      })
      builder.addCase(GetUsersBanksListed.rejected, (state) => {
        state.getBanksListed = null;
      })

      builder.addCase(GetAllTransactionUsers.fulfilled, (state, action) => {
        state.getAllTransaction = action.payload.transaction;
      })
      builder.addCase(GetAllTransactionUsers.rejected, (state) => {
        state.getAllTransaction = null;
      })

      builder.addCase(AllTransactionCart.fulfilled, (state, action) => {
        state.allTransactionCart = action.payload.transaction;
      })
      builder.addCase(AllTransactionCart.rejected, (state) => {
        state.allTransactionCart = null;
      })

      builder.addCase(GetAllTransactionCart.fulfilled, (state, action) => {
        state.getAllTransactionCart = action.payload.transaction;
      })
      builder.addCase(GetAllTransactionCart.rejected, (state) => {
        state.getAllTransactionCart = null;
      })
    }
  });

  const { reducer } = transactionSlice;
  export default reducer;