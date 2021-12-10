import logo from './logo.svg';
import './App.css';

import CreateConfig from './components/createConfig';
import CreateObject from './components/createObjet';
import ReadRef from './components/readRef';
import ReadObjet from './components/readObjet';
import UpdateConfig from './components/updateConfig';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <h2 className="main-header">Projet DA50 - Front</h2>
      <div>
          <CreateConfig/>
      </div>
      <div style={{ marginTop: 20 }}>
          <ReadRef/>
      </div>
        <UpdateConfig/>
    </div>
    <div>
      <CreateObject/> 
    </div>
    <div>
      <ReadObjet/>
    </div>
  </Router>
  );
}

export default App;
