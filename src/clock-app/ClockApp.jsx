import React from 'react';
import ClockKeeper from './clock-keeper/ClockKeeper';

class ClockApp extends React.Component {
  constructor(props){
    super(props);
    this.state={toggleClock: false};
  }

  render(){
    return (
      <div>
          <button onClick={()=>this.setState({toggleClock: !this.state.toggleClock})}>Toggle Clock</button>
          {this.state.toggleClock ? <ClockKeeper/> : <p>No Clock</p>}
      </div>
    );
  }
}

export default ClockApp;
