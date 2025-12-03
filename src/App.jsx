import { useState } from 'react'
import './App.css'
import Hello from './Hello';

function App() {
  const username = "Kunj";
    
  return (
    <div>
      <h1>Hello React!</h1>
      <h2>Welcome, {username}</h2>
      <Hello name={username} />
    </div>
  );
}

export default App;