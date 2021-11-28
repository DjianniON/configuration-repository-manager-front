import logo from './logo.svg';
import './App.css';
import Read from './components/read';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      Projet DA50 - Front
      <div>
          <Route exact path='/read' component={Read} />
        </div>
    </div>
  );
}

export default App;
