import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//JSX Syntax:
function Hello({library, message, number}) {
  
  return (
    <div>
      <h1>Welcome to {library}</h1>
      <p>{message}</p>
      <p>React components: {number}</p>
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




