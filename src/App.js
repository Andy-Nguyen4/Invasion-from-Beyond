import React from 'react';
import './css/app.css';

function App() {
  return (
    <div className="App">

      <div className="title">
        <h1>INVASION from BEYOND</h1>
        {/*<h2>FROM</h2>
        <h1>BEYOND</h1>*/}
      </div>

      <div className="button-area">
        <button className="new-game">New Game</button>
        <br></br>
        <button className="load-game">Load Game</button>
        <br></br>
        <button className="settings">Settings</button>
        <br></br>
        <button className="extra">Extra Content</button>
        <br></br>
        <button className="quit">Quit</button>
      </div>

    </div>
  );
}

export default App;
