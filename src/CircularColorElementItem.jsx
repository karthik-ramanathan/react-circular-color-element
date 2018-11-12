import React from 'react';

export default class CircularColorElementItem extends React.Component {
    render() {
      const rotate = `${(this.props.index * (this.props.total <=2 ? 180 : 360)) / this.props.total}deg`;
      const skew = `${90 - (360 / this.props.total)}deg`;
      let style = {
        backgroundColor: this.props.color,
        position: 'fixed',
        width:'inherit',
        height:'inherit',
        color: 'transparent',
        top: '50%',
        left: '50%',
        transformOrigin: '0% 0%',
        cursor: 'pointer'
      }
  
      if(this.props.total === 1){
        style.top = 0;
        style.left = 0;
      }else if(this.props.total === 2){
        style.transform = `rotate(${rotate})`;
        style.top = 0;
      }else if(this.props.total > 2){
        style.transform = `rotate(${rotate}) skew(${skew})`;
      }
      return (
        <div className={"CircularColorItem"} style={style} onClick={this.props.onSelect} onMouseEnter={this.props.onHover}>
        </div>
      )
    }
  }