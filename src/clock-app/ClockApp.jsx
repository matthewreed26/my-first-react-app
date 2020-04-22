import React from 'react';
import Clock from './clock/Clock';

class ClockApp extends React.Component {
  constructor(props){
    super(props);
    this.state={toggleClock: false};
  }

  render(){
    return (
      <div>
          {this.state.toggleClock ? <Clock /> : <p>No Clock</p>}
          <button onClick={()=>this.setState({toggleClock: !this.state.toggleClock})}>Toggle Clock</button>
      </div>
    );
  }
}

export default ClockApp;
