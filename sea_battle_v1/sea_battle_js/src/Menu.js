import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {



  render() {
    return (
      <div id="menu" className="menu">
        <nav role='navigation' id="mainnav">
          <ul>
            <li><a href="#?">Home</a></li>
            <li><a href="#?">About</a></li>
            <li><a href="#?">Clients</a></li>
            <li><a href="#?">Contact Us</a></li>
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
