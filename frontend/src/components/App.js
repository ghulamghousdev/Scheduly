import React from 'react';
import TextBox from './textbox';
import ButtonBox from './buttonbox';
import SignUp from './signup';
import '../styles/signupPage.scss';
import Clock from '../clock-illustration.png'

function LoginPage() {
  return (
    <div className="fp-container">
      <div className="row fw-row col-2-2-1">
        <div className="col-1">
          <TextBox 
            preHeading="Welcome To"
            heading="Scheduly"
            text="This app can be used to generate an automatically scheduled time table. Now get rid of all the manual labour of hit and trial method for generating time table"
          />
          <img className="login-image" src={Clock}/>
          <ButtonBox 
            btOneClass="buttonbox__button buttonbox__button--active"
            btTwoClass="buttonbox__button"
          />
        </div>
        <div className="col-2">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
