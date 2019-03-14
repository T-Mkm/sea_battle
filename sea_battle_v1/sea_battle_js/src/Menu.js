import React, { Component } from 'react';
// import './Menu.css';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var props = this.props;

    return (
      <div id="menu" className="menu">
        <nav role='navigation' id="mainnav">
          <ul>
            <li><a href="javascript:void(0)" onClick={()=>{props.setActiveTab(0); closeMainMenu();}}>Home</a></li>
            <li><a href="javascript:void(0)" onClick={()=>{props.setActiveTab(1); closeMainMenu();}}>About</a></li>
            <li><a href="javascript:void(0)" onClick={()=>{props.setActiveTab(2); closeMainMenu();}}>Clients</a></li>
            <li><a href="javascript:void(0)" onClick={()=>{props.setActiveTab(3); closeMainMenu();}}>Contact Us</a></li>
          </ul>
        </nav>

        <div className="hamb">
          <a href="#"><i className="fa fa-bars"></i></a>
        </div>



        <canvas id="bubble"></canvas>
      </div>
    );
  }
}

export default Menu;
