import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  user: {
    name:string,
    email:string,
    token:string,
  }
}

const initialState: CounterState = {
  user: {
    name:'',
    email:'',
    token:'',
  },
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUser: (actions, payload) => {

    },
    removeUser: (state, payload) => {
      state.user.name = 'hello'
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser: any, removeUser } = counterSlice.actions

export default counterSlice.reducer