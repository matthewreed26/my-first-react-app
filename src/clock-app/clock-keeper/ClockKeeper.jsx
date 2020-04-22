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
      const clockKeys = [...Array(this.props.numClocks).keys()];
      const clocks = clockKeys.map((clockKey) =>
        <Clock key={'id'+clockKey} date={this.state.date}/>
      );

      return (
        <div>{clocks}</div>
      );
    }
}  
  
export default ClockKeeper;
