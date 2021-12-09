import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <h2 className="main-header">Projet DA50 - Front</h2>
      <div>
          <Create/>
      </div>
      <div style={{ marginTop: 20 }}>
          <Read/>
      </div>
        <Update/>
    </div>
  </Router>
  );
}

export default App;
