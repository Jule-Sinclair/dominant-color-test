import React from 'react';
import HueyComponent from './Huey';
import Vibrant from './Vibrant';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HueyComponent />
        <Vibrant />
      </div>
    );
  }
}