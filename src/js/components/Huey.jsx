import React from "react";
import huey from "huey";

export default class HueyComponent
 extends React.Component {
  constructor() {
    super();
    this.images = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  }
  componentDidMount() {
    this.images.map((image, idx) => {
      huey(`./src/images/${image}.jpg`, (error, rgb, image) => {
        console.log(document.getElementById(idx));
        document.getElementById(idx).style.border = `50px solid rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1`;
      });
    })
  }
  renderImages() {
    return this.images.map((imageSrc, idx) => {
      return (<div
        key={imageSrc}
      >
        <img
          id={imageSrc}
          src={`./src/images/${imageSrc}.jpg`}
          alt=""
        />
      </div>)
    })
  }
  render() {
    return (
      <div>
        {this.renderImages()}
      </div>
    );
  }
}