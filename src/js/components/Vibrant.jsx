import React from 'react';
import DOMSetter from './DOMSetter';
import * as Vibrant from 'node-vibrant';

export default class VibrantComponent extends DOMSetter {
  constructor() {
    super();
    this.id_text = 'Vibrant';
  }
  componentDidMount() {
    this.images.map((image, idx) => {
      Vibrant.from(`./src/images/${image}.jpg`).getPalette((err, palette) => {
        const idString = `${this.id_text}_${idx}`;
        console.log(`${idString} : r(${palette.Vibrant._rgb[0]}) g(${palette.Vibrant._rgb[1]}) b(${palette.Vibrant._rgb[2]})`);
        document.getElementById(`${idString}`).style.background = `rgba(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]}, 1)`;
        document.getElementById(`${idString}_text`).style.color = this.getTextColor(palette.Vibrant._rgb[0], palette.Vibrant._rgb[1], palette.Vibrant._rgb[2]);
      })
    })
  }
}