import React from 'react';
import ClockKeeper from './clock-keeper/ClockKeeper';
import NumInputs from '../common/inputs/NumInputs';

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
        <NumInputs numInputs={this.state.numClocks} 
              numInputsChange={(e)=>this.setState({numClocks: Number(e.target.value)})}/>
        <button onClick={()=>this.setState({toggleClock: !this.state.toggleClock})}>Toggle Clock</button>
        {this.state.toggleClock ? <ClockKeeper numClocks={this.state.numClocks}/> : <p>No Clock</p>}
      </div>
    );
  }
}

export default ClockApp;
