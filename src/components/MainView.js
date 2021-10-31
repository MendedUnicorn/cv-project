import React, { Component } from "react";
import GeneralInforView from "./GeneralInforView";
import PracticalInfoView from "./PracticalInfoView";
import SchoolInfoView from "./SchoolInfoView";

export default class MainView extends Component {
  render() {
    return (
      <div>
        <GeneralInforView />
        <SchoolInfoView />
        <PracticalInfoView />
      </div>
    );
  }
}
