import React, { Component } from "react";
import "../styles/input.css";

export default class GeneralInfoInput extends Component {
  render() {
    const { handleChange } = this.props;
    //name
    //email
    //phonenumber
    return (
      <form className="general-info-form">
        <label htmlFor="name-input">First Name</label>
        <input type="text" name="name-input" id="name-input"></input>

        <label htmlFor="family-name-input">Family Name</label>
        <input type="text" name="family-name-input" id="family-name-input" />

        <label htmlFor="email-input">Email</label>
        <input type="email" name="email-input" id="email-input" />

        <label htmlFor="phone-input">Phone Number</label>
        <input type="text" name="phone-input" id="phone-input" pattern="" />
        <input type="submit" value="Set.." onClick={handleChange} />
      </form>
    );
  }
}
