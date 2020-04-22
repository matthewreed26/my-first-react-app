import React from 'react';
import Clock from './clock/Clock';

class ClockKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
      () => this.tick(),
      1000);
      // alert('component mounted!');
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      // alert('now unmounted!');
    }
  
    tick() {
      this.setState({
        date: new Date() });
  
    }
  
    render() {
      return (
        <div>
          <Clock date={this.state.date}/>
          <Clock date={this.state.date}/>
          <Clock date={this.state.date}/>
          <Clock date={this.state.date}/>
        </div>
      );
    }
}  
  
export default ClockKeeper;
