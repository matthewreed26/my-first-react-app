import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClockApp from './clock-app/ClockApp';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={place:'My World'};
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ClockApp/>
        </header>
      </div>
    );
  }
}

export default App;
