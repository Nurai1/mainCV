import React from 'react';
import './App.css';

import { info as infoArray } from './info';
import Accordeon from './accordeon/accordeon';

function App() {
  return (
    <div className="App">
      <Accordeon info = {infoArray}/>
    </div>
  );
}

export default App;
