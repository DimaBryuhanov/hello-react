import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function App() {
  //Hook
  const [year, setYear] = useState(2050)
  const [status, setStatus] = useState("Open");
  const [manager, setManager] = useState('John');
  return (
    <>
    <div>
      <h2>Year: {year}</h2>
      <button onClick={() => setYear(year + 1)}>
        New Year
      </button>
    </div>
    <div>
      <h2>Manager on duty: {manager}</h2>
      <button onClick={() => setManager("Donald")}>
        New Manager
      </button>
    </div>
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
    </div>
  </>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);




