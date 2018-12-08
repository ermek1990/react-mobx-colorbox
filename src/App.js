import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="center">
            {
              this.props.store.containerItems.map((container, index) =>
              (
                <Container
                  key={index}
                  containerId = { container.containerId }
                  colorBoxList = { container.colorBoxList }
                  containerList = { container.containerList }
                  updateColorBoxValue = { this.props.store.updateColorBoxValue }
                  addNewContainerToContainer = { this.props.store.addNewContainerToContainer }
                  addNewColorBoxToContainer = { this.props.store.addNewColorBoxToContainer }
                  removeColorBoxFromContainer = { this.props.store.removeColorBoxFromContainer }
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default observer(App);
