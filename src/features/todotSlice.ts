import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducres: {
    add: () => {
      state.push()
    }
  }
});