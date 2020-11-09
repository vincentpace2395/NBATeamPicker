import React from 'react';
import TeamSelect from "./Components/TeamSelect";
import './App.css';

function App() {
  return (
    <div>
        <div className="App">
            NBA Team Picker
        </div>
        <span>
            <h3>Home team</h3>
        </span>
        <div className="Team-select">
            <TeamSelect />
        </div>
        <hr />
        <span>
            <h3>Away Team</h3>
        </span>
        <div className="Team-select">
            <TeamSelect />
        </div>
    </div>
  );
}

export default App;
