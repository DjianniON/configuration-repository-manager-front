import logo from './logo.svg';
import './App.css';
import ReadList from './components/readList';
import { Header, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Header as='h1' textAlign='center' content='Container' />
    <Container>
    <ReadList />
    </Container>
    </div>
    </Router>
    );
  }
  
  export default App;
  