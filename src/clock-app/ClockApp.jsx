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
          <button onClick={
            (e)=>{
              this.setState({toggleClock: !this.state.toggleClock})
              e.persist();
              console.log(e);
            }}>Toggle Clock</button>
          {this.state.toggleClock ? <ClockKeeper numClocks={4}/> : <p>No Clock</p>}
      </div>
    );
  }
}

export default ClockApp;
