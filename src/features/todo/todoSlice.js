import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Rest" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id != action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id === action.payload.id ? action.payload.todo : el
      );
    },
  },
});

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer
