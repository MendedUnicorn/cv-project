import React, { Component } from "react";
import "../styles/view.css";

export default class PracticalInfoView extends Component {
  render() {
    return (
      <div className="practical-element">
        <div className="practical-info">
          <h2>Uni name</h2>
          <p>from</p>
          <p>to </p>
        </div>
        <div className="work-info">
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
