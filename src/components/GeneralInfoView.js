import React, { Component } from "react";
import "../styles/view.css";

export default class GeneralInfoView extends Component {
  render() {
    const { firstName, lastName, email, phoneNumber } = this.props;
    return (
      <div className="general-info-view">
        <div className="view-name">
          <h3>{firstName ? firstName : "Name"}</h3>
          <h3>{lastName ? lastName : "Family Name"}</h3>
          <p>{}</p>
        </div>
        <div className="view-contact">
          <p>
            <i class="fas fa-phone"></i>
            {phoneNumber ? phoneNumber : "Phone Number.."}
          </p>
          <p>
            <i class="fas fa-at"></i>
            {email ? email : "Email Address.."}
          </p>
        </div>
      </div>
    );
  }
}
