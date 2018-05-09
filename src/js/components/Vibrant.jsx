import React from 'react';
import * as Vibrant from 'node-vibrant';

export default class VibrantComponent extends React.Component {
  render() {
    console.log(Vibrant.from('./src/images/image1.jpg'));
    Vibrant.from('./src/images/image1.jpg').getPalette((err, palette) => console.log(palette))
    return (
      <div>
        <img src="./src/images/image1.jpg" alt=""/>
      </div>
    );
  }
}