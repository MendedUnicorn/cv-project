import GeneralInfoInput from "./components/GeneralInfoInput";
import SchoolInfoInput from "./components/SchoolInfoInput";
import PracticalInfoInput from "./components/PracticalInfoInput";
import MainView from "./components/MainView";
import "./styles/app.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      education: {
        schoolName: "",
        title: "",
        text: "",
        from: "",
        to: "",
      },
      work: {
        companyName: "",
        title: "",
        text: "",
        from: "",
        to: "",
      },
      educations: [],
      workPlaces: [],
    };
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleEducationInfoChange = this.handleEducationInfoChange.bind(this);
    this.handleWorkInfoChange = this.handleWorkInfoChange.bind(this);
  }

  render() {
    const { firstName, lastName, email, phoneNumber } = this.state.generalInfo;
    const { educations, workPlaces } = this.state;
    return (
      <div>
        <h1>CV-Generator</h1>
        <div className="App">
          <div className="input">
            <GeneralInfoInput
              handleChange={this.handleGeneralInfoChange}
            ></GeneralInfoInput>
            <SchoolInfoInput
              handleChange={this.handleEducationInfoChange}
            ></SchoolInfoInput>
            <PracticalInfoInput
              handleChange={this.handleWorkInfoChange}
            ></PracticalInfoInput>
          </div>
          <div className="view">
            <MainView
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
              educations={educations}
              workPlaces={workPlaces}
            ></MainView>
          </div>
        </div>
      </div>
    );
  }

  handleGeneralInfoChange(e) {
    e.preventDefault();
    this.setState({
      generalInfo: {
        firstName: e.target.form[0].value,
        lastName: e.target.form[1].value,
        email: e.target.form[2].value,
        phoneNumber: e.target.form[3].value,
      },
    });
    console.dir(e.target.form);
  }
  handleEducationInfoChange(e) {
    e.preventDefault();
    this.setState(
      {
        education: {
          schoolName: e.target.form[0].value,
          title: e.target.form[1].value,
          text: e.target.form[2].value,
          from: e.target.form[3].value,
          to: e.target.form[4].value,
        },
      },
      () => {
        this.setState(
          {
            educations: [...this.state.educations, this.state.education],
          },
          () => console.dir(this.state)
        );
      }
    );
  }

  handleWorkInfoChange(e) {
    e.preventDefault();
    this.setState(
      {
        work: {
          companyName: e.target.form[0].value,
          title: e.target.form[1].value,
          text: e.target.form[2].value,
          from: e.target.form[3].value,
          to: e.target.form[4].value,
        },
      },
      () => {
        this.setState(
          {
            workPlaces: [...this.state.workPlaces, this.state.work],
          },
          () => console.dir(this.state)
        );
      }
    );
  }
}
