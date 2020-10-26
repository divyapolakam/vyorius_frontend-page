import React from 'react';
import MainPage from './components/MainPage';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import "./App1.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Router>
<Route path="/" exact component={MainPage} />

</Router>
      </header>
    </div>
  );
}

export default App;
