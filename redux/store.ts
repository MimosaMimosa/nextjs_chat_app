import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'

const preloadedState = {
    auth: {
        user: {},
    }
}

const store = configureStore({
    reducer:{
        auth:userReducer,
    },
    preloadedState,
});

export default store;