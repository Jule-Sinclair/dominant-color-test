import React from 'react';

export default class DOMSetter extends React.Component {
  constructor() {
    super();
    this.images = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.id_text = '';
  }
  renderImages() {
    return this.images.map((imageSrc, idx) => {
      return (<li
        style={{
          display: "inline-block",
          margin: "0 10px",
          height: "240px"
        }}
        key={imageSrc}
      >
        <img
          src={`./src/images/${imageSrc}.jpg`}
          style={{
            width: '100px',
            verticalAlign: 'top',
            border: '1px solid #e9e9e9'
          }}
          alt=""
        />
        <div
          id={`${this.id_text}_${idx}`}
          style={{
            width: '102px',
            height: '20px',
            marginTop: '5px'
          }}
        />
      </li>)
    })
  }
  render() {
    return (
      <article>
        <h2>{this.id_text}</h2>
        <ul style={{listStyle: "none"}}>
          {this.renderImages()}
        </ul>
      </article>
    );
  }
}