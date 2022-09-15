import React, { Component } from "react";
import "./under-construction.css";
import techApply from "../../images/Main-Banner.svg";
import logoSvg from "../../images/logo.svg";
import upPoint from "../../images/up-group-point.svg";
import downPoint from "../../images/down-group-point.svg";
export default class UnderConstruction extends Component {
  render() {
    return (
      <div className="page">
        <section className="slide-info">
          <img src={logoSvg} alt="logo" className="logo" />
          <article className="info-box">
            <img src={upPoint} alt="up group point" className="group-point" />
            <h1 className="title">Under Construction</h1>
            <p className="description">
              My website is currently undergoing .
              <br />
              Should be back shortly, thanks you for you patience.
            </p>
            <input type="email" placeholder="Email" className="email"></input>
            <button className="btnEmail">Send Notification</button>
          </article>
        </section>
        <section className="slide-image">
          <img src={techApply} alt="tech apply" className="tech-apply" />
          <img src={downPoint} alt="down group point" className="img-right" />
        </section>
      </div>
    );
  }
}
