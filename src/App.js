import React from 'react';
import logo from './logo.svg';
import './App.css';

import Knob from './components/knob';

function App() {
  return (
    <div className="App">
      <Knob
            numTicks={125}
            degrees={270}
            min={1}
            max={100}
            value={0}
            //onChange={this.handleChange}
          />
    </div>
  );
}

export default App;
