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
        document.getElementById(`${this.id_text}_${idx}`).style.background = `rgba(${palette.Vibrant._rgb[0]}, ${palette.Vibrant._rgb[1]}, ${palette.Vibrant._rgb[2]}, 1)`;
      })
    })
  }
}