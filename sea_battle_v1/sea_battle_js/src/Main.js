import React, { Component } from 'react';
// import './Main.css';

import Board from './Board';
import Menu from './Menu';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab:0};
  }
  render() {
    var state = this.state;
    return (
      <div id="main" className="main">
      <Menu setActiveTab={(newActiveTab)=>{this.setState({activeTab: newActiveTab});}}/>
      <Board activeTab={state.activeTab}/>
      </div>
    );
  }
}

export default Main;
//https://codepen.io/trhino/pen/ujHan