import { createSlice } from "@reduxjs/toolkit";


const initialStateValue={
    TodoData:[],
    loading:true,
    error:""
}

export const Todo_reducer=createSlice({
    name:"TODO",
    initialState:initialStateValue,
    reducers:{
        AddTodo:(state,action)=>{

            console.log(action.payload)
            state.TodoData.push(action.payload);
        },
    }
});

export const {AddTodo}=Todo_reducer.actions;

export default Todo_reducer.reducer;