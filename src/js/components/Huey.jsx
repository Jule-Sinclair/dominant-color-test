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
        document.getElementById(`${this.id_text}_${idx}`).style.background = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1`;
      });
    })
  }
}