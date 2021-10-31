import React, { Component } from "react";

export default class PracticalInfoInput extends Component {
  render() {
    return (
      <div className="practical-info-input">
        <h2>Work Experience</h2>
        <form>
          <label htmlFor="company-name-input">Company Name</label>
          <input
            type="text"
            name="company-name-input"
            id="company-name-input"
          />{" "}
          <br />
          <label htmlFor="position-title-input">Position Title</label>
          <input
            type="text"
            name="position-title-input"
            id="position-title-input"
          />{" "}
          <br />
          <label htmlFor="work-task-input">Responsibilities</label>
          <textarea
            name="work-task-input"
            id="work-task-input"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <label htmlFor="from-input">From</label>
          <input type="date" name="from-input" id="from-input" /> <br />
          <label htmlFor="to-input">To</label>
          <input type="date" name="to-input" id="to-input" />
        </form>
      </div>
    );
  }
}
