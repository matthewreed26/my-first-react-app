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

const element =
  <h1>Hello, {formatPlace(aPlace)}!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);