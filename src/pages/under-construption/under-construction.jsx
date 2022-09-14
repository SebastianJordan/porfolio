import React, { Component } from "react";
import "./under-construction.css";
import fondoImg from "../../images/Main-Banner.svg";
import logoSvg from "../../images/logo.svg";
import upPoint from "../../images/up-group-point.svg";
export default class UnderCostruction extends Component {
  render() {
    return (
      <div className="page">
        <section className="slide-info">
          <img src={logoSvg} alt="logo" className="img-logo" />
          <article className="info-box">
            <img src={upPoint} alt="up group point" className="group-point" />
            <h1 className="title">Under Construction</h1>
            <p className="description">
              My website is currently undergoing . Should be back shortly,
              thanks you for you patience.
            </p>

            {/* <input type="email" placeholder="Email"></input>
            <button>Send Notification</button> */}
          </article>
        </section>
        <section className="slide-image">
          <img
            src={fondoImg}
            alt="fondo"
            width="100%"
            height="100%"
            className="fondo-img"
          />
          {/* <img src={downPoint} alt="down group point" /> */}
        </section>
      </div>
    );
  }
}
