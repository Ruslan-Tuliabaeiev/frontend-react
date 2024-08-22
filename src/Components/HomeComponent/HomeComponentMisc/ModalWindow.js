import React from 'react';
// import { AiOutlineCheckCircle } from 'react-icons/ai';

import './modalWindow.css'

export const ModalWindow = () => {

  return (
    <div className="form-container">
      <div className="content-box">
        <p className="heading-text">
          SIGN UP NOW AND START! YOU'LL SEE THE RESULT IN 30 MINUTES
        </p>
        <form>
          <div className="input-container">
            <input
              type="text"
              id="firstName"
              className="input-field"
              placeholder="First name"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              id="lastName"
              className="input-field"
              placeholder="Last name"
            />
          </div>
          <div className="input-container">
            <input
              type="date"
              id="age"
              className="input-field"
              placeholder="Enter your date of birth"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Your email"
            />
          </div>
  
          <div className="checkbox-container">
            <input type="checkbox" id="agreement" className="checkbox-field" />
            <label htmlFor="agreement" className="checkbox-label">
              I have read and accept the Customer Agreement
            </label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="ageConfirmation" className="checkbox-field" />
            <label htmlFor="ageConfirmation" className="checkbox-label">
              I hereby confirm that I am at least 18 years old
            </label>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Register now
          </button>
        </form>
      </div>
    </div>
  );
  

} 
