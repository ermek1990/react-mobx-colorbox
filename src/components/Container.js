import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ColorBox from './ColorBox';

class Container extends Component {
  state = {
    containerId: this.props.containerId,
    buttonHover: false,
  };
  
  handleAddColorBox = () => {
    this.props.addNewColorBoxToContainer(this.state.containerId);
  };

  handleAddContainer = () => {
    this.props.addNewContainerToContainer(this.state.containerId);
  };

  handleDeleteColorBox = (colorBoxId) => {
    this.props.removeColorBoxFromContainer(colorBoxId, this.state.containerId);
  };

  handleButtonHover = () => {
    this.setState({ buttonHover: true });
  };

  handleButtonUnhover = () => {
    this.setState({ buttonHover: false });
  };

  render() {
    return(
      <div>
        <div className="container__field">
          {
            this.props.colorBoxList.map((colorBox, index) => {
              return <ColorBox
                        key={index}
                        colorBoxId = { colorBox.colorBoxId }
                        updateColorBoxValue = { this.props.updateColorBoxValue }
                      />;
            })
          }
          {
            this.props.containerList.map((container, index) => {
              return  <Container
                        key={index}
                        containerId = { container.containerId }
                        colorBoxList = { container.colorBoxList }
                        containerList = { container.containerList }
                        updateColorBoxValue = { this.props.updateColorBoxValue }
                        addNewContainerToContainer = { this.props.addNewContainerToContainer }
                        addNewColorBoxToContainer = { this.props.addNewColorBoxToContainer }
                        removeColorBoxFromContainer = { this.props.removeColorBoxFromContainer }
                      />;
            })
          }
          <div
            className="button__container"
            onMouseOver={ this.handleButtonHover }
            onMouseLeave={ this.handleButtonUnhover }
          >
            <button
              className="has-tooltip"
            >
              <strong>ADD</strong>
            </button>
            {
              this.state.buttonHover ?
              (
                <span
                  className="tooltip"
                >
                  <button
                    className="btn__tooltip"
                    onClick={ this.handleAddColorBox }
                  >
                    <strong>Box</strong>
                  </button>
                  <button
                    className="btn__tooltip"
                    onClick={ this.handleAddContainer }
                  >
                    <strong>Container</strong>
                  </button>
                </span>
              ) : null
            }
          </div>
        </div>
      </div>
    );
  };
};

export default observer(Container);
