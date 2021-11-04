import React from 'react';
import '../styles/view.css';

const PracticalInfoView = (props) => {
  const { workPlaces, handleWorkEdit } = props;

  return workPlaces.map((work) => (
    <div className='practical-element' key={work.id} id={work.id}>
      <div className='practical-info'>
        <h2> {work.companyName} </h2>
        <p>{work.from}</p>
        <p>{work.to} </p>
      </div>
      <div className='work-info'>
        <h2>{work.title}</h2>
        <p>{work.text}</p>
      </div>
      <button type='submit' className='edit' onClick={handleWorkEdit}>
        Edit
      </button>
    </div>
  ));
};
export default PracticalInfoView;
