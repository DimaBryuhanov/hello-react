import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//JSX Syntax:
function Hello(props) {
  console.log(Object.keys(props))
  return (
    <div>
      <h1>Welcome to {props.library}</h1>
      <p>{props.message}</p>
      <p>React components: {props.number}</p>
    </div>
  )
}

ReactDOM.render(
  <Hello library="React"
    message="Have Fun!"
    number={3}
  />,
  document.getElementById('root')
);




