import React from 'react';
import '../styles/view.css';

const GeneralInfoView = (props) => {
  const { firstName, lastName, email, phoneNumber } = props;
  return (
    <div className='general-info-view'>
      <div className='view-name'>
        <h3>{firstName || 'Name'}</h3>
        <h3>{lastName || 'Family Name'}</h3>
        <p>{}</p>
      </div>
      <div className='view-contact'>
        <p>
          <i className='fas fa-phone' />
          {phoneNumber || 'Phone Number..'}
        </p>
        <p>
          <i className='fas fa-at' />
          {email || 'Email Address..'}
        </p>
      </div>
    </div>
  );
};
export default GeneralInfoView;
