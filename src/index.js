import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//JSX Syntax:
function Hello(){
  return (
    <div>
      <h1>Welcome to react</h1>
      <p>Let's build something cool!</p>
    </div>
  )
}

ReactDOM.render(
<Hello />,
  document.getElementById('root')
);




