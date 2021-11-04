import React from 'react';
import '../styles/view.css';

const SchoolInfoView = (props) => {
  const { educations, handleEducationEdit } = props;
  return (
    <div>
      {educations.map((education) => (
        <div className='school-element' key={education.id} id={education.id}>
          <div className='school-info'>
            <h2>{education.schoolName}</h2>
            <p>From: {education.from}</p>
            <p>To: {education.to} </p>
          </div>
          <div className='study-info'>
            <h2>{education.title}</h2>
            <p>{education.text}</p>
          </div>
          <button type='submit' className='edit' onClick={handleEducationEdit}>
            Edit..
          </button>
        </div>
      ))}
    </div>
  );
};
export default SchoolInfoView;
