import React from 'react';
import colorify from 'colorify.js';

export default class Colorify extends React.Component {
  componentDidMount() {
    colorify({
      container: 'class',
      images: ['https://camo.githubusercontent.com/104d2ac9246e9eeeede83108ecdc35734a2f1421/68747470733a2f2f692e696d6775722e636f6d2f4178665437684d2e706e67'],
      give: {
        property: 'background',
        target: '.target',
      }
    });
  }

  render() {
    return (
      <div className="colorify-color">
        <div className="target" style={{ background: 'none', width: '100px', heigth: '100px', border: '1px solid #e9e9e9' }}/>
      </div>
    );
  }
}