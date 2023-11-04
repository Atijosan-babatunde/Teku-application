import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message.slices";
import KycServices from "../services/kyc.services";


export const KycPersonalUser = createAsyncThunk(
    "kyc/kycPersonalUser",
    async (body, thunkAPI) => {
        try {
            const data = await KycServices.KycPersonalUser(
                body
            );
            return { kyc: data };
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

export const KycBusinessUser = createAsyncThunk(
    "kyc/kycBusinessUser",
    async (body, thunkAPI) => {
        try {
            const data = await KycServices.KycBusinessUser(
                body
            );
            return { kyc: data };
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

export const KycVerifyIdentityUser = createAsyncThunk(
    "kyc/kycVerifyUser",
    async (body, thunkAPI) => {
        try {
            const data = await KycServices.KycVerifyIdentityUser(
                body
            );
            return { kyc: data };
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
    kycPersonalUser: null,
    kycBusinessUser: null,
    kycVerifyUser: null,
};


export const kycSlice = createSlice({
    name: "kyc",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(KycPersonalUser.fulfilled, (state, action) => {
            state.kycPersonalUser = action.payload.kyc;
        })
        builder.addCase(KycPersonalUser.rejected, (state) => {
            state.kycPersonalUser = null;
        })

        builder.addCase(KycBusinessUser.fulfilled, (state, action) => {
            state.kycBusinessUser = action.payload.kyc;
        })
        builder.addCase(KycBusinessUser.rejected, (state) => {
            state.kycBusinessUser = null;
        })

        builder.addCase(KycVerifyIdentityUser.fulfilled, (state, action) => {
            state.kycVerifyUser = action.payload.kyc;
        })
        builder.addCase(KycVerifyIdentityUser.rejected, (state) => {
            state.kycVerifyUser = null;
        })
    }
});

const { reducer } = kycSlice;
export default reducer;