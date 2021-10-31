import React, { Component } from "react";

export default class SchoolInfoInput extends Component {
  render() {
    return (
      <div className="school-info-input">
        <h2>Education</h2>
        <form>
          <label htmlFor="school-name-input">School Name</label>
          <input
            type="text"
            name="school-name-input"
            id="school-name-input"
          />{" "}
          <br />
          <label htmlFor="title-input">Title</label>
          <input type="text" name="title-input" id="title-input" />
          <br />
          <label htmlFor="from-input">From</label>
          <input type="date" name="from-input" id="from-input" />
          <br />
          <label htmlFor="to-input">To</label>
          <input type="date" name="to-input" id="to-input" />
        </form>
      </div>
    );
  }
}
