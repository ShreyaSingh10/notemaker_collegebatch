import React from 'react';
import './App.css';
import Container from './Components/Container'; //import ur parent component into app.js

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Checking Bootstrap</button>
      <button className="btn btn-danger">Checking Bootstrap</button>
      <button className="btn btn-secondary">Checking Bootstrap</button>
      <Container/>
    </div>
  );
}

export default App;
