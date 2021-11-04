/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/input.css';

const SchoolInfoInput = (props) => {
  const { handleChange, editing } = props;
  return (
    <div className='school-info-input'>
      <h2>Education</h2>
      <form className='school-info-form'>
        <label htmlFor='school-name-input'>School Name</label>
        <input type='text' name='school-name-input' id='school-name-input' />
        <label htmlFor='title-input'>Title</label>
        <input type='text' name='title-input' id='title-input' />
        <label htmlFor='description-input'>Description</label>
        <textarea name='description-input' id='description-input' />
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
export default SchoolInfoInput;
