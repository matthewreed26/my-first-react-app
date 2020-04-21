import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatPlace(place) {
  return place.size + ' ' + place.name;
}

const aPlace = {
  size: 'Big',
  name: 'World'
};

function Element(props) {
  return <h1>Hello, {props.myPlace}!</h1>;
}

ReactDOM.render(
  <Element myPlace={formatPlace(aPlace)}/>,
  document.getElementById('root')
);