import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class ColorBox extends Component {
  state = {
    colorBoxId: this.props.colorBoxId,
    color: this.props.colorValue ? this.props.colorValue : {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    this.props.updateColorBoxValue(this.state.colorBoxId, color);
  };

  render() {
    const styles = {
      color_box__background: {
        background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
      }
    };
    return (
      <div>
        <div
          className="color-box"
          style={ styles.color_box__background }
          onClick={ this.handleClick }
        />
        {
          this.state.displayColorPicker
          ?
            <div 
              className="popover__color-box"
            >
              <div
                className="cover__color-box"
                onClick={ this.handleClose }
              />
              <SketchPicker
                color={ this.state.color }
                onChange={ this.handleChange }
              />
            </div>
          :
          null
        }
      </div>
    );
  }
}

export default ColorBox;
