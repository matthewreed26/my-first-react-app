import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          <p>{this.state.place}</p>
          <button onClick={()=>this.setState({place: 'Hello World'})}>Change String</button>
        </header>
      </div>
    );
  }
}

export default App;
