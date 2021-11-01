import React, { Component } from "react";
import "../styles/input.css";

export default class PracticalInfoInput extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="practical-info-input">
        <h2>Work Experience</h2>
        <form>
          <label htmlFor="company-name-input">Company Name</label>
          <input
            type="text"
            name="company-name-input"
            id="company-name-input"
          />
          <label htmlFor="position-title-input">Position Title</label>
          <input
            type="text"
            name="position-title-input"
            id="position-title-input"
          />
          <label htmlFor="work-task-input">Responsibilities</label>
          <textarea
            name="work-task-input"
            id="work-task-input"
            // cols="30"
            // rows="10"
          ></textarea>
          <label htmlFor="from-input">From</label>
          <input type="date" name="from-input" id="from-input" />
          <label htmlFor="to-input">To</label>
          <input type="date" name="to-input" id="to-input" />
          <input
            id="submit-work-data"
            type="submit"
            value="Add.."
            onClick={handleChange}
          />
        </form>
      </div>
    );
  }
}
