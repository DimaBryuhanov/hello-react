import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: 1, name: "Huron", trailhead: "big" },
  { id: 2, name: "Ontario", trailhead: "medium" },
  { id: 3, name: "Taho", trailhead: "small" },
]

function App({ lakes }) {
  return (
    <div>
      {lakes.map(lake => (
        <div key={lake.id}>
          <h2>Lake name: {lake.name}</h2>
          <p>Trailhead:{lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);




