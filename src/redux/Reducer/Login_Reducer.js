import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'Login',
  initialState: {
    name:"",
    address:""
  },
  reducers: {
    LoginUser:(state, action)=>{
      const {name,address}=action.payload;
      state.name=name;
      state.address=address;
    },
  },
})

export const { LoginUser } = loginSlice.actions
export default loginSlice.reducer