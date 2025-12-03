import { useState } from "react";
import "@/components/App/App.css";
import Hello from "@/components/Hello/Hello";

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