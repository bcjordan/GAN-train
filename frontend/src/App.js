import React from 'react';
import logo from './logo512.png';
import './App.css';

import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

// Adding touch support: https://konvajs.org/docs/events/Mobile_Events.html

class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
        <Rect
            x={this.props.x}
            y={20}
            width={50}
            height={50}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
        />
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="" src={logo}/>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Try click on rect" />
            <ColoredRect x={5}  />
            <ColoredRect x={10}/>
            <ColoredRect x={15}/>
          </Layer>
        </Stage>
      </header>
    </div>
  );
}

export default App;
