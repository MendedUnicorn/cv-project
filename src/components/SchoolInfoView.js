import React, { Component } from "react";
import "../styles/view.css";

export default class SchoolInfoView extends Component {
  render() {
    const { educations } = this.props;
    return educations.map((education) => {
      return (
        <div className="school-element">
          <div className="school-info">
            <h2>{education.schoolName}</h2>
            <p>From: {education.from}</p>
            <p>To: {education.to} </p>
          </div>
          <div className="study-info">
            <h2>{education.title}</h2>
            <p>{education.text}</p>
          </div>
        </div>
      );
    });
  }
}
