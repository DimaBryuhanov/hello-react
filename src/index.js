import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//JSX Syntax:

let city = {
  name: "Madrid",
  country: "Spain"
};

ReactDOM.render(
<h1 id='heading' className="cool-text">
  {city.name} is located in {city.country}
  </h1>,
  document.getElementById('root')
);




