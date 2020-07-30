import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(props) {
  return (
    <div>
      <h1>Visit {props.name}!</h1>
    </div>
  )
}

function SkiResort(props) {
  return (
    <div>
      <h1>Visit {props.name}!</h1>
    </div>
  )
}

function App(props) {
  return (
    <React.Fragment>
      {props.season === "summer" ? (
        <Lake name="Huron" />
      ) : (
          props.season === 'winter' ? (
            <SkiResort name="Tirol" />
          ) : (
              <h1> Come Back Later !</h1>
            )
        )}
    </React.Fragment>

  );
}

//Array destructuring
const [summer, fall, winter, sprint] = [
  "summer", "fall", "winter", "spring"
]

ReactDOM.render(
  <App season = {summer} />,
  document.getElementById('root')
);




