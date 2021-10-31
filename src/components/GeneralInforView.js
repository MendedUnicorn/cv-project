import React, { Component } from "react";
import "../styles/view.css";

export default class GeneralInforView extends Component {
  render() {
    return (
      <div className="general-info-view">
        <div className="view-name">
          <h3>Name</h3>
          <h3>Familiy Name</h3>
          <p>Current title</p>
        </div>
        <div className="view-contact">
          <p>
            <i></i>Email
          </p>
          <p>
            <i></i>Phone Number
          </p>
        </div>
      </div>
    );
  }
}
