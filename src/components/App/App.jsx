import { useEffect, useState } from "react";
import "@/components/App/App.css";
import Hello from "@/components/Hello/Hello";
import { dummyData } from "@/services/dummyData";

function App() {
  const username = "Kunj";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDummyData() {
      setTimeout(() => {
        setData(dummyData);
      }, 500);
    }

    fetchDummyData();
  }, []);

  return (
    <div>
      <h1>Hello React!</h1>
      <h2>Welcome, {username}</h2>
      <Hello name={username} />

      <h3>Dummy Data:</h3>
      <ul>
        {data.map((item) => (
          <h4 key={item.id}>
            <strong>{item.title}</strong> - {item.description}
          </h4>
        ))}
      </ul>
    </div>
  );
}

export default App;