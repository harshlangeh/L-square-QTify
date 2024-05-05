import React from 'react'
import './Button.css'

const Feedback = ({ onButtonClick }) => {
  return (
    <div className='button'>
      <h3 onClick={onButtonClick}>Give Feedback</h3>
    </div>
  );
}

export default Feedback