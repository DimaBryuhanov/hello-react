import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//https://babeljs.io/ try out in Babel:

// ReactDOM.render(
//   <ul>
//   <li>Hot Dogs</li>
//   <li>Hamburgers</li>
//   <li>Sushi</li>
//   <li>Pazza</li>
// </ul>,
//   document.getElementById('root')
// );

//You will get:
ReactDOM.render( 
  /*#__PURE__*/React.createElement("ul", null, 
  /*#__PURE__*/React.createElement("li", null, "Hot Dogs"), 
  /*#__PURE__*/React.createElement("li", null, "Hamburgers"), 
  /*#__PURE__*/React.createElement("li", null, "Sushi"), 
  /*#__PURE__*/React.createElement("li", null, "Pazza")), 
  document.getElementById('root'));




