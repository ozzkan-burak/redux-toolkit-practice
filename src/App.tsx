import React, { useState } from 'react';
import { add, remove } from "./features/todotSlice";
import './App.css';
import { useAppDispatch, useAppSelector } from './store';

function App() {
  const todos = useAppSelector(state => state.todos)
  const [title, setTitle] = useState("")

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  }

  const handleDelete = (id: string) => {
    dispatch(remove(id))
  }

  return (
    <div className="App">
      <input name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <button onClick={onSave}>Save</button>
      <ul>
        {todos.map((todo)=> (
          <li>
            <span key={todo.id}>{todo.title}</span>
            <span onClick={() => handleDelete(todo.id)}> Delete</span>
          </li>
          ))}

      </ul>
    </div>
  );
}

export default App;
