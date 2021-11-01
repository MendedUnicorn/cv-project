import React, { Component } from "react";
import "../styles/view.css";

export default class PracticalInfoView extends Component {
  render() {
    const { workPlaces } = this.props;

    return workPlaces.map((work) => {
      return (
        <div className="practical-element" key={work.id} id={work.id}>
          <div className="practical-info">
            <h2> {work.companyName} </h2>
            <p>{work.from}</p>
            <p>{work.to} </p>
          </div>
          <div className="work-info">
            <h2>{work.title}</h2>
            <p>{work.text}</p>
          </div>
          <button class="edit" onClick={this.props.handleWorkEdit}>
            Edit
          </button>
        </div>
      );
    });
  }
}
