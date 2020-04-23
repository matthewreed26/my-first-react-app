import React from 'react';
import ClockKeeper from './clock-keeper/ClockKeeper';

class ClockApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      toggleClock: false,
      numClocks: 4
    };
  }
  render(){
    return (
      <div>
        <p>Number of Clocks to Display: {this.state.numClocks}</p>
        <input type="range" min="1" max="10" defaultValue={this.state.numClocks}
            onChange={(e)=>this.setState({numClocks: Number(e.target.value)})}></input>
        <button onClick={()=>this.setState({toggleClock: !this.state.toggleClock})}>Toggle Clock</button>
        {this.state.toggleClock ? <ClockKeeper numClocks={this.state.numClocks}/> : <p>No Clock</p>}
      </div>
    );
  }
}

export default ClockApp;
