import React from "react";
import DOMSetter from './DOMSetter';
import huey from "huey";

export default class HueyComponent extends DOMSetter {
  constructor() {
    super();
    this.id_text = 'Huey';
  }
  componentDidMount() {
    this.images.map((image, idx) => {
      huey(`./src/images/${image}.jpg`, (error, rgb, image) => {
        const idString = `${this.id_text}_${idx}`;
        console.log(`${idString} : r(${rgb[0]}) g(${rgb[1]}) b(${rgb[2]})`);
        document.getElementById(`${idString}`).style.background = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1`;
        document.getElementById(`${idString}_text`).style.color = this.getTextColor(rgb[0], rgb[1], rgb[2]);
      });
    })
  }
}