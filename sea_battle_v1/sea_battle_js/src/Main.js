import React, { Component } from 'react';
import './Main.css';

import Board from './Board';
import Menu from './Menu';

class Main extends Component {
  render() {
    return (
      <div id="main" className="main">
      <Menu />
      <Board />
      </div>
    );
  }
}

export default Main;
//https://codepen.io/trhino/pen/ujHan