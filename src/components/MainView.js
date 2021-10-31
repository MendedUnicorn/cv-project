import React, { Component } from "react";
import GeneralInforView from "./GeneralInfoView";
import PracticalInfoView from "./PracticalInfoView";
import SchoolInfoView from "./SchoolInfoView";

export default class MainView extends Component {
  render() {
    const { firstName, lastName, email, phoneNumber, educations, workPlaces } =
      this.props;
    return (
      <div>
        <GeneralInforView
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
        />
        <h2>Education</h2>
        <SchoolInfoView educations={educations} />
        <h2>Work Experience</h2>
        <PracticalInfoView workPlaces={workPlaces} />
      </div>
    );
  }
}
