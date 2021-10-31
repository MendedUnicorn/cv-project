import React, { Component } from "react";
import "../styles/view.css";

export default class PracticalInfoView extends Component {
  render() {
    const { workPlaces } = this.props;

    return workPlaces.map((work) => {
      return (
        <div className="practical-element">
          <div className="practical-info">
            <h2> {work.companyName} </h2>
            <p>{work.from}</p>
            <p>{work.to} </p>
          </div>
          <div className="work-info">
            <h2>{work.title}</h2>
            <p>{work.text}</p>
          </div>
        </div>
      );
    });
  }
}
