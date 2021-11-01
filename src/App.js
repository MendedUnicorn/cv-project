import GeneralInfoInput from "./components/GeneralInfoInput";
import SchoolInfoInput from "./components/SchoolInfoInput";
import PracticalInfoInput from "./components/PracticalInfoInput";
import MainView from "./components/MainView";
import "./styles/app.css";
import React, { Component } from "react";
import uniqid from "uniqid";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      editingSchool: false,
      editingWork: false,
      editIndexSchool: 0,
      editIndexWork: 0,
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
        id: uniqid(),
      },
      work: {
        companyName: "",
        title: "",
        text: "",
        from: "",
        to: "",
        id: uniqid(),
      },
      educations: [],
      workPlaces: [],
    };
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleEducationInfoChange = this.handleEducationInfoChange.bind(this);
    this.handleWorkInfoChange = this.handleWorkInfoChange.bind(this);
    this.handleEducationEdit = this.handleEducationEdit.bind(this);
    this.handleWorkEdit = this.handleWorkEdit.bind(this);
    this.setInputValues = this.setInputValues.bind(this);
  }

  render() {
    const { firstName, lastName, email, phoneNumber } = this.state.generalInfo;
    const { educations, workPlaces, editing } = this.state;
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
              editing={editing}
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
              handleEducationEdit={this.handleEducationEdit}
              handleWorkEdit={this.handleWorkEdit}
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
  }
  handleEducationInfoChange(e) {
    e.preventDefault();
    if (
      !e.target.form[0].value &&
      !e.target.form[1].value &&
      !e.target.form[2].value &&
      !e.target.form[3].value
    ) {
      this.setState({ editIndexSchool: 0 });
      return;
    }
    this.setState(
      {
        education: {
          schoolName: e.target.form[0].value,
          title: e.target.form[1].value,
          text: e.target.form[2].value,
          from: e.target.form[3].value,
          to: e.target.form[4].value,
          id: this.state.education.id,
        },
      },
      () => {
        const { schoolName, title, text, from, to } = this.state.education;
        let arr = [...this.state.educations];
        arr.splice(this.state.editIndexSchool, 0, this.state.education);
        this.setState(
          {
            educations: [...arr],
            education: {
              schoolName,
              title,
              text,
              from,
              to,
              id: uniqid(),
            },
            editIndexSchool: 0,
            editingSchool: false,
          },
          () => {
            e.target.form[0].value = "";
            e.target.form[1].value = "";
            e.target.form[2].value = "";
            e.target.form[3].value = "";
            e.target.form[4].value = "";
            console.log("object,a", this.state.education);
          }
        );
      }
    );
  }

  handleWorkInfoChange(e) {
    e.preventDefault();
    if (
      !e.target.form[0].value &&
      !e.target.form[1].value &&
      !e.target.form[2].value &&
      !e.target.form[3].value
    ) {
      this.setState({ editIndexSchool: 0 });
      return;
    }
    this.setState(
      {
        work: {
          companyName: e.target.form[0].value,
          title: e.target.form[1].value,
          text: e.target.form[2].value,
          from: e.target.form[3].value,
          to: e.target.form[4].value,
          id: this.state.work.id,
        },
      },
      () => {
        const { companyName, title, text, from, to } = this.state.work;
        let arr = [...this.state.workPlaces];
        arr.splice(this.state.editIndexWork, 0, this.state.work);
        this.setState(
          {
            workPlaces: [...arr],
            work: {
              companyName,
              title,
              text,
              from,
              to,
              id: uniqid(),
            },
            editIndexWork: 0,
            editingWork: false,
          },
          () => {
            e.target.form[0].value = "";
            e.target.form[1].value = "";
            e.target.form[2].value = "";
            e.target.form[3].value = "";
            e.target.form[4].value = "";
          }
        );
      }
    );
  }

  handleEducationEdit(e) {
    this.setState({ editingSchool: true });
    const id = e.target.parentElement.id;
    console.log("");
    let index;
    this.state.educations.map((school, i) => {
      console.log("loopinmg", school);
      if (school.id == id) {
        console.log("match");
        index = i;
        this.setState(
          {
            education: {
              schoolName: school.schoolName,
              title: school.title,
              text: school.text,
              from: school.from,
              to: school.to,
              id: id,
            },
          },
          () => {
            this.setInputValues("school");
            this.setState({
              educations: [
                ...this.state.educations.slice(0, index),
                ...this.state.educations.slice(index + 1),
              ],
              editIndexSchool: index,
            });
          }
        );
      }
    });
  }
  handleWorkEdit(e) {
    this.setState({ editingWork: true });
    const id = e.target.parentElement.id;
    console.log({ id });
    let index;
    this.state.workPlaces.map((work, i) => {
      if (work.id == id) {
        console.log("match");
        index = i;
        this.setState(
          {
            work: {
              companyName: work.companyName,
              title: work.title,
              text: work.text,
              from: work.from,
              to: work.to,
              id: id,
            },
          },
          () => {
            this.setInputValues("practical");
            this.setState({
              workPlaces: [
                ...this.state.workPlaces.slice(0, index),
                ...this.state.workPlaces.slice(index + 1),
              ],
              editIndexWork: index,
            });
          }
        );
      }
    });
  }

  setInputValues(input) {
    let toChange;
    let name;
    if (input == "school") {
      toChange = this.state.education;
      name = toChange.schoolName;
    } else {
      toChange = this.state.work;
      name = toChange.companyName;
    }
    const div = document.querySelector(`.${input}-info-input`);
    const inputArray = div.lastElementChild.childNodes;
    inputArray[1].value = name;
    inputArray[3].value = toChange.title;
    inputArray[5].value = toChange.text;
    inputArray[7].value = toChange.from;
    inputArray[9].value = toChange.to;
    console.log(toChange);
  }
}
