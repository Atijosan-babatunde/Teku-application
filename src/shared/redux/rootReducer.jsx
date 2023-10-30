import { combineReducers } from '@reduxjs/toolkit';
import landingReducer from './slices/landing.slices'
import transactionReducer from './slices/transaction.slices'
import recipientReducer from './slices/recipient.slices'
import notificationReducer from './slices/notification.slices'
import userReducer from './slices/users.slices'



const rootReducer = combineReducers({
    landing:landingReducer,
    transaction:transactionReducer,
    recipient:recipientReducer,
    notification:notificationReducer,
    users:userReducer,
});

export default rootReducer