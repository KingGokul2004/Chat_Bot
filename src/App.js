import './App.css';
import ChatBot from './Components/ChatBot';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatMessages from './Components/ChatMessages';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ChatBot  />
      
    </div>
  );
}

export default App;
