
import "./App.scss";
import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState([]);

  // Run name Function when page loads
  useEffect(() => {
    names()
  }, [name])

  // We will use async/await to fetch the data

  const names = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/');

    // store the data information
    setName(await response.json())
  }

  return (
    <div className="App">
      <h1>Name is written here bellow</h1>
      <ol className="list-group list-group-numbered">
          {name.map((data) => {
            return (
              <li className="list-group-item" key={data.id}>{data.title}</li>
            )
          })}
      </ol>
    </div>
  );
}

export default App;
