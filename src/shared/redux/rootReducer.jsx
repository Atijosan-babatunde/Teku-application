import { combineReducers } from '@reduxjs/toolkit';
import landingReducer from './slices/landing.slices'
import transactionReducer from './slices/transaction.slices'
import recipientReducer from './slices/recipient.slices'



const rootReducer = combineReducers({
    landing:landingReducer,
    transaction:transactionReducer,
    recipient:recipientReducer,
});

export default rootReducer