import logo from './logo.svg';
import { Button } from '@material-ui/core'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button  variant='contained'>
          Learn more
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  
    </div>
  );
}

export default App;
