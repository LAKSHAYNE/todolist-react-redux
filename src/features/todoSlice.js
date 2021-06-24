import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 todoList:[]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo:(state,action)=>{
            state.todoList.push(action.payload)
        },
        setCheck:(state,action)=>{
            console.log(`here in set state ${action.payload}`);
            state.todoList.map((item)=>{
                if(item.id===action.payload){
                if(item.done){
                    item.done=false
                }
                else{
                    item.done=true
                }
            }
            })
        }
    }
});

export const {saveTodo,setCheck}=todoSlice.actions

export const selectTodoList=state=>state.todos.todoList

export default todoSlice.reducer