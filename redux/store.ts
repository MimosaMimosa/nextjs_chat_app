import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './slice/messengerSlice'

// const preloadedState = {
//     auth: {
//         user: {},
//     }
// }

const store = configureStore({
    reducer:{
        messenger:messagesReducer,
    },
    // preloadedState,
});

export default store;