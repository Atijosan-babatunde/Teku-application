import { combineReducers } from '@reduxjs/toolkit';
import landingReducer from './slices/landing.slices'


const rootReducer = combineReducers({
    landing:landingReducer,
});

export default rootReducer