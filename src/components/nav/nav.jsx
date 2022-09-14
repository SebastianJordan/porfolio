import React, { Component } from "react";
import logo from "../../logo.svg";
import "./nav.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <img src={logo} className="logo" alt="logo" />

        <nav>
          <li className="active">About</li>
          <li>Experience</li>
          <li>Projects</li>
        </nav>
        <button>Contact</button>
      </div>
    );
  }
}
