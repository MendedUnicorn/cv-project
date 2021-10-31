import React, { Component } from "react";

export default class GeneralInfoInput extends Component {
  render() {
    //name
    //email
    //phonenumber
    return (
      <form>
        <label htmlFor="name-input">First Name</label>
        <input type="text" name="name-input" id="name-input"></input>
        <br />
        <label htmlFor="family-name-input">Family Name</label>
        <input type="text" name="family-name-input" id="family-name-input" />

        <br />
        <label htmlFor="email-input">Email</label>
        <input type="email" name="email-input" id="email-input" />
        <br />
        <label htmlFor="phone-input">Phone Number</label>
        <input type="number" name="phone-input" id="phone-input" />
      </form>
    );
  }
}
