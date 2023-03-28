import React, { useRef } from 'react';
import './App.css';

function App() {
  const titleRef = useRef<HTMLInputElement | null>(null);

  const onSave = () => {
    console.log(titleRef.current?.value);
  }

  return (
    <div className="App">
      <input name="title" ref={titleRef} />
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default App;
