import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    // todos: [{id: 1, text: "Hello world"}]
    todos: []
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        attachState:(state,action)=>{
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {attachState,addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer