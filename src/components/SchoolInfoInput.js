import React, { Component } from "react";
import "../styles/input.css";

export default class SchoolInfoInput extends Component {
  render() {
    const { handleChange } = this.props;
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
          <label htmlFor="description-input">Description</label>
          <textarea
            name="description-input"
            id="description-input"
            cols="30"
            rows="2"
          ></textarea>
          <label htmlFor="from-input">From</label>
          <input type="date" name="from-input" id="from-input" />
          <br />
          <label htmlFor="to-input">To</label>
          <input type="date" name="to-input" id="to-input" />
          <input type="submit" value="Add.." onClick={handleChange} />
        </form>
      </div>
    );
  }
}
