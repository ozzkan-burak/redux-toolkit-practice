import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid"; 

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state: any, action: PayloadAction<string>) => {
      const newTodo = { id:uuid, title: action.payload, completed: false }
      state.push(newTodo)
    }
  }
});

export default todoSlice.reducer;
export const { add } = todoSlice.actions;
