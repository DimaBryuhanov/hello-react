import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  "Lake Taho",
  "Lake Huron",
  "Lake Ontario"
]

function App(props) {
  return (
    <div> 
      {props.lakes.map(lake => (
        <li>{lake}</li>
      ))}
    </div>
  )
}

ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById('root')
);




