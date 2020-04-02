import React from 'react';
import logo from './logo.svg';
import './App.css';
const myIpcRenderer = window.myIpcRenderer;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            myIpcRenderer
              .invoke('APP_insert', {name: 'Chihaya', age: 16})
              .then(message => {
                console.log(message);
              })
              .catch(err => {
                console.error(err);
              });
          }}>
          click
        </button>
      </header>
    </div>
  );
}

export default App;
