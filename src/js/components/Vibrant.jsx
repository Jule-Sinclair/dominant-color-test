import React from 'react';
import DOMSetter from './DOMSetter';
import * as Vibrant from 'node-vibrant';

export default class VibrantComponent extends DOMSetter {
  constructor() {
    super();
    this.id_text = 'Vibrant';
    this.paletteTypes = ['DarkMuted', 'DarkVibrant', 'LightMuted', 'LightVibrant', 'Muted', 'Vibrant'];
  }
  componentDidMount() {
    window.palettes = [];
    this.images.map((image, idx) => {
      Vibrant.from(`./src/images/${image}.jpg`).getPalette((err, palette) => {
        window.palettes.push(palette);
        let targetVibrant = null;
        let textColor = null;
        const idString = `${this.id_text}_${idx}`;
        this.paletteTypes.map(type => {
          targetVibrant = palette[type] ? palette[type] : { _rgb: [255, 255, 255] };
          textColor =  palette[type] ? this.getTextColor(targetVibrant._rgb[0], targetVibrant._rgb[1], targetVibrant._rgb[2]) : '#fff';

          document.getElementById(`${idString}_${type}`).style.background = `rgba(${targetVibrant._rgb[0]}, ${targetVibrant._rgb[1]}, ${targetVibrant._rgb[2]}, 1)`;
          document.getElementById(`${idString}_${type}_text`).style.color = textColor;
        })
      })
    })
  }
  colorBlocksRenderer(idx) {
    return (
      <ul
        style={{
          listStyle: 'none',
          width: '150px',
          padding: '0 5px 5px 5px',
          margin: '5px 0 0 0',
          boxSizing: 'border-box',
          border: '1px solid #e9e9e9',
        }}
      >
        {this.paletteTypes.map(palette => (
          <li key={`${idx}_${palette}`}>
              <div
                id={`${this.id_text}_${idx}_${palette}`}
                style={{
                  width: '100%',
                  padding: '5px',
                  marginTop: '5px',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                <strong
                  id={`${this.id_text}_${idx}_${palette}_text`}
                  style={{
                    fontSize: '18px'
                  }}
                >
                  {palette}
                </strong>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}