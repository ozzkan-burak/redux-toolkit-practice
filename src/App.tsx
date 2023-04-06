import React, { useState } from 'react';
import { add } from "./features/todotSlice";
import './App.css';
import { useAppDispatch, useAppSelector } from './store';

function App() {
  const todos = useAppSelector(state => state.todos)
  const [title, setTitle] = useState("")

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add("title"));
    setTitle("");
  }

  return (
    <div className="App">
      <input name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <button onClick={onSave}>Save</button>
      <ul>
        {todos.map((todo)=> console.log(todo)
        )}
      </ul>
    </div>
  );
}

export default App;
