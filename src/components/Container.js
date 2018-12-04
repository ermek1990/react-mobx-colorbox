import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ColorBox from './ColorBox';

class Container extends Component {
  state = {
    containerId: this.props.containerId,
    colorBoxList: this.props.colorBoxList,
    containerList: this.props.containerList,
  };
  
  handleAddBox = () => {
    this.props.addNewColorBoxToContainer(this.state.containerId);
  };

  handleAddContainer = () => {
    this.props.addNewContainerToContainer(this.state.containerId);
  };

  handleDeleteColorBox = (colorBoxId) => {
    this.props.removeColorBoxFromContainer(colorBoxId, this.state.containerId);
  };

  render() {
    return(
      <div>
        <div className="container__field">
          {
            this.state.colorBoxList.map((colorBox, index) => {
              return <ColorBox
                        key={index}
                        colorBoxId = { colorBox.colorBoxId }
                        updateColorBoxValue = { this.props.updateColorBoxValue }
                      />;
            })
          }
          {
            this.state.containerList.map((container, index) => {
              return null;
            })
          }
          <button
            className="has-tooltip"
          >
            <strong>ADD</strong>
          </button>
          <span
            className="tooltip"
          >
            <button
              onClick={ this.handleAddBox }
            >
              <strong>Box</strong>
            </button>
            <button
              onClick={ this.handleAddContainer }
            >
              <strong>Container</strong>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default observer(Container);
