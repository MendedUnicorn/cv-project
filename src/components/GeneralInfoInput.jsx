/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/input.css';

const GeneralInfoInput = (props) => {
  const { handleChange } = props;
  return (
    <form className='general-info-form'>
      <label htmlFor='name-input'>First Name</label>
      <input type='text' id='name-input' />

      <label htmlFor='family-name-input'>Family Name</label>
      <input type='text' name='family-name-input' id='family-name-input' />

      <label htmlFor='email-input'>Email</label>
      <input type='email' name='email-input' id='email-input' />

      <label htmlFor='phone-input'>Phone Number</label>
      <input type='text' name='phone-input' id='phone-input' pattern='' />
      <input
        className='btn'
        type='submit'
        value='Set..'
        onClick={handleChange}
      />
    </form>
  );
};

export default GeneralInfoInput;
