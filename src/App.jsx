/* eslint-disable array-callback-return */
import uniqid from 'uniqid';
import React, { useState, useEffect } from 'react';
import SchoolInfoInput from './components/SchoolInfoInput';
import PracticalInfoInput from './components/PracticalInfoInput';
import MainView from './components/MainView';
import './styles/app.css';
import GeneralInfoInput from './components/GeneralInfoInput';

const App = () => {
  const [update, setUpdate] = useState(false);
  const [editingSchool, setEditingSchool] = useState(false);
  const [editingWork, setEditingWork] = useState(false);
  const [editIndexSchool, setEditIndexSchool] = useState(0);
  const [editIndexWork, setEditIndexWork] = useState(0);
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [education, setEducation] = useState({
    schoolName: '',
    title: '',
    text: '',
    from: '',
    to: '',
    id: uniqid(),
  });
  const [work, setWork] = useState({
    companyName: '',
    title: '',
    text: '',
    from: '',
    to: '',
    id: uniqid(),
  });
  const [educations, setEducations] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);

  function setInputValues(input) {
    let toChange;
    let name;
    if (input === 'school') {
      toChange = education;
      name = toChange.schoolName;
    } else {
      toChange = work;
      name = toChange.companyName;
    }
    const div = document.querySelector(`.${input}-info-input`);
    const inputArray = div.lastElementChild.childNodes;
    inputArray[1].value = name;
    inputArray[3].value = toChange.title;
    inputArray[5].value = toChange.text;
    inputArray[7].value = toChange.from;
    inputArray[9].value = toChange.to;
  }

  useEffect(() => {
    if (update && !editingSchool) {
      const arr = [...educations];
      arr.splice(editIndexSchool, 0, education);
      setEducations([...arr]);
    }
    if (update && editingSchool) {
      setInputValues('school');
      setEducations([
        ...educations.slice(0, editIndexSchool),
        ...educations.slice(editIndexSchool + 1),
      ]);
    }
  }, [education]);

  useEffect(() => {
    if (update) {
      const arr = [...workPlaces];
      arr.splice(editIndexWork, 0, work);
      setWorkPlaces([...arr]);
    }
    if (update && editingWork) {
      setInputValues('practical');
      setWorkPlaces([
        ...workPlaces.slice(0, editIndexWork),
        ...workPlaces.slice(editIndexWork + 1),
      ]);
    }
  }, [work]);

  const handleGeneralInfoChange = (e) => {
    e.preventDefault();
    setGeneralInfo({
      firstName: e.target.form[0].value,
      lastName: e.target.form[1].value,
      email: e.target.form[2].value,
      phoneNumber: e.target.form[3].value,
    });
  };

  const handleEducationInfoChange = (e) => {
    e.preventDefault();
    setUpdate(true);
    if (
      !e.target.form[0].value &&
      !e.target.form[1].value &&
      !e.target.form[2].value &&
      !e.target.form[3].value
    ) {
      setEditIndexSchool(0);
      return;
    }
    const [schoolName, title, text, from, to] = e.target.form;
    setEducation({
      schoolName: schoolName.value,
      title: title.value,
      text: text.value,
      from: from.value,
      to: to.value,
      id: uniqid(),
    });
    if (editingSchool === true) setEditingSchool(false);
    if (!editingSchool) setEditIndexSchool(0);
    e.target.form[0].value = '';
    e.target.form[1].value = '';
    e.target.form[2].value = '';
    e.target.form[3].value = '';
    e.target.form[4].value = '';
  };

  const handleWorkInfoChange = (e) => {
    e.preventDefault();
    setUpdate(true);
    if (
      !e.target.form[0].value &&
      !e.target.form[1].value &&
      !e.target.form[2].value &&
      !e.target.form[3].value
    ) {
      setEditIndexSchool(0);
      return;
    }
    setWork({
      companyName: e.target.form[0].value,
      title: e.target.form[1].value,
      text: e.target.form[2].value,
      from: e.target.form[3].value,
      to: e.target.form[4].value,
      id: uniqid(),
    });

    if (editingWork === true) setEditingWork(false);
    if (!editingWork) setEditIndexWork(0);

    e.target.form[0].value = '';
    e.target.form[1].value = '';
    e.target.form[2].value = '';
    e.target.form[3].value = '';
    e.target.form[4].value = '';
  };

  const handleEducationEdit = (e) => {
    setEditingSchool(true);
    const { id } = e.target.parentElement;
    let index;
    educations.map((school, i) => {
      if (school.id === id) {
        index = i;
        setEducation({
          schoolName: school.schoolName,
          title: school.title,
          text: school.text,
          from: school.from,
          to: school.to,
          id,
        });
        setEditIndexSchool(index);
      }
    });
  };

  const handleWorkEdit = (e) => {
    setEditingWork(true);
    const { id } = e.target.parentElement;
    let index;
    workPlaces.map((workEl, i) => {
      if (workEl.id === id) {
        index = i;
        setWork({
          companyName: workEl.companyName,
          title: workEl.title,
          text: workEl.text,
          from: workEl.from,
          to: workEl.to,
          id,
        });

        setEditIndexWork(index);
      }
    });
  };

  return (
    <div>
      <h1>CV-Generator</h1>
      <div className='App'>
        <div className='input'>
          <GeneralInfoInput handleChange={handleGeneralInfoChange} />
          <SchoolInfoInput
            handleChange={handleEducationInfoChange}
            editing={editingSchool}
          />
          <PracticalInfoInput
            handleChange={handleWorkInfoChange}
            editing={editingWork}
          />
        </div>
        <div className='view'>
          <MainView
            firstName={generalInfo.firstName}
            lastName={generalInfo.lastName}
            email={generalInfo.email}
            phoneNumber={generalInfo.phoneNumber}
            educations={educations}
            workPlaces={workPlaces}
            handleEducationEdit={handleEducationEdit}
            handleWorkEdit={handleWorkEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
