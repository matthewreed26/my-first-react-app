import React from 'react';

function Clock(props) {
      return (
        React.createElement("div", null,
        React.createElement("h1", null, "Hello, world!"),
        React.createElement("h2", null, "It is ", props.date.toLocaleTimeString(), ".")));
    }
  
export default Clock;