/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/input.css';

const PracticalInfoInput = (props) => {
  const { handleChange, editing } = props;
  return (
    <div className='practical-info-input'>
      <h2>Work Experience</h2>
      <form>
        <label htmlFor='company-name-input'>Company Name</label>
        <input type='text' name='company-name-input' id='company-name-input' />
        <label htmlFor='position-title-input'>Position Title</label>
        <input
          type='text'
          name='position-title-input'
          id='position-title-input'
        />
        <label htmlFor='work-task-input'>Responsibilities</label>
        <textarea name='work-task-input' id='work-task-input' />
        <label htmlFor='from-input'>From</label>
        <input type='date' name='from-input' id='from-input' />
        <label htmlFor='to-input'>To</label>
        <input type='date' name='to-input' id='to-input' />
        <input
          className={editing ? 'editing' : 'btn'}
          type='submit'
          value={editing ? 'Submit Edit' : 'Add..'}
          onClick={handleChange}
        />
      </form>
    </div>
  );
};
export default PracticalInfoInput;
