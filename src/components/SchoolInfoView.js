import React, { Component } from "react";
import "../styles/view.css";

export default class SchoolInfoView extends Component {
  render() {
    return (
      <div className="school-element">
        <div className="school-info">
          <h2>Uni name</h2>
          <p>from</p>
          <p>to </p>
        </div>
        <div className="study-info">
          <h2>Title of study</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            nobis, reiciendis voluptatum ut, dolorem animi eveniet ea illo
            accusantium velit dicta consequatur quaerat explicabo vitae?
            Voluptate ducimus ipsum officiis harum!
          </p>
        </div>
      </div>
    );
  }
}
