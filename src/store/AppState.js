import { observable, decorate, action } from 'mobx';
import shortid from 'shortid';

const initColorBoxId = shortid();
const initColorBoxState = {
  colorBoxId: initColorBoxId,
  color: {
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  },
};

const initContainerState = {
  containerId: shortid(),
  colorBoxList: [
    {
      colorBoxId: initColorBoxId,
    }
  ],
  containerList: [],
};

class AppState {
  colorBoxItems = [ initColorBoxState ];
  containerItems = [ initContainerState ];

  addNewColorBoxToContainer = (containerId) => {
    const boxId = shortid();
    this.colorBoxItems.push({
      colorBoxId: boxId,
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
    });
    this.containerItems.map(
      (container) => {
        if (container.containerId === containerId) {
          container.colorBoxList.push({
            colorBoxId: boxId,
          });
        }
        return container;
      }
    );
  };

  updateColorBoxValue = (colorBoxId, color) => {
    this.colorBoxItems.map(
      (colorBox) => {
        if (colorBox.colorBoxId === colorBoxId) {
          colorBox.color = color;
        }
        return colorBox;
      }
    );
  };

  addNewContainerToContainer = (containerId) => {
    this.containerItems.map(
      (container) => {
        if (container.containerId === containerId) {
          container.containerList.push({
            containerId: shortid(),
            colorBoxList: [
              {
                colorBoxId: shortid(),
              }
            ],
            containerList: [],
          });
        }
        return container;
      }
    );
    console.log(this.containerItems[0].containerList.length);
  };

  removeColorBoxFromContainer = (colorBoxId, containerId) => {
    this.containerItems.map(
      (container) => {
        if (containerId === container.containerId)
          return container.colorBoxList.filter(colorBox => colorBox.colorBoxId !== colorBoxId);
        else
          return container;
      }
    );
  };
};

decorate(AppState, {
  colorBoxItems: observable,
  containerItems: observable,
  updateColorBoxValue: action.bound,
  addNewColorBoxToContainer: action.bound,
  addNewContainerToContainer: action.bound,
  removeColorBoxFromContainer: action.bound,
});

export default new AppState();
