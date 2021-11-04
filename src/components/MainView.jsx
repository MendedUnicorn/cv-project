import React from 'react';
import GeneralInforView from './GeneralInfoView';
import PracticalInfoView from './PracticalInfoView';
import SchoolInfoView from './SchoolInfoView';

const MainView = (props) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    educations,
    workPlaces,
    handleEducationEdit,
    handleWorkEdit,
  } = props;
  return (
    <div>
      <GeneralInforView
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
      />
      <h2>Education</h2>
      <SchoolInfoView
        educations={educations}
        handleEducationEdit={handleEducationEdit}
      />
      <h2>Work Experience</h2>
      <PracticalInfoView
        workPlaces={workPlaces}
        handleWorkEdit={handleWorkEdit}
      />
    </div>
  );
};
export default MainView;
