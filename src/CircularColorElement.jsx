import React from 'react';
import CircularColorElementItem from './CircularColorElementItem.jsx';
const transformColor = require('transform-colors');

export default class CircularColorElement extends React.Component {
    onSelect(selectedColor) {
      if(typeof this.props.onSelect === "function"){
        if(this.props.name){
          this.props.onSelect(this.props.name, selectedColor);
        }else{
          this.props.onSelect(selectedColor);
        }
        
      }
    }
    onHover(selectedColor) {
      //this.props.onSelect(level, selectedColor);
      if(typeof this.props.onHover === "function"){
        if(this.props.name){
          this.props.onHover(this.props.name, selectedColor);
        }else{
          this.props.onHover(selectedColor);
        }
        
      }
    }
    render() {
      let colors = this.props.colors;
      let hueVariations = parseInt(this.props.variations || 10);
      if(!colors){
        colors = [];
        if (typeof hue === "undefined") {
          for (let i = 0; i < 360; i += hueVariations) {
            colors.push(transformColor.hsl2hex(i, 100, 50))
          };
        }
      }
      return (
        <div className="CircularColor" style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          borderRadius: (typeof this.props.rounded === "undefined" || this.props.rounded ? "50%" : "0"),
          overflow: "hidden",
          transition: "all 0.3s ease",
          width: this.props.size || 30,
          height: this.props.size || 30,
          clipPath: `circle(${this.props.size / 2}px at center)`,
          transform: `translate(-50%, -50%) scale(${this.props.active ? 1 : 0})`
        }}>
          {colors.map((color, index) => {
            return (
              <CircularColorElementItem onHover={this.onHover.bind(this, color)} onSelect={this.onSelect.bind(this, color)} key={index} index={index} total={colors.length} color={color} />
            )
          })}
        </div>
      )
  
    }
  }
  
  