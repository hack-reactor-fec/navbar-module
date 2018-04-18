import React, { Component } from 'react';
import axios from 'axios';


class RemindMeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminderSet: false,
      reminderForm: false,
      validEmail: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleExitFormClick = this.handleExitFormClick.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.checkEmailValidity = this.checkEmailValidity.bind(this);
  }

  handleFormClick() {
    this.setState({
      reminderForm: true,
    });
  }

  handleExitFormClick() {
    this.setState({
      reminderForm: false,
    });
  }

  handleEmailSubmit() {
    if (this.state.validEmail && this.state.reminderSet === false) {
      axios.put(`/api/navbar/${this.props.projectId}`, {
        email: document.getElementsByClassName('emailInput')[0].value,
      })
        .then((response) => {
          console.log('Email saved!:', response);
        })
        .catch((error) => {
          console.log('Error saving your email:', error);
        });
      this.setState({
        reminderSet: true,
      });
    } else {
      // add your email is invalid to DOM
      console.log('Invalid Email');
    }
  }

  checkEmailValidity() {
    const context = this;
    let valid = false;
    let email = document.getElementsByClassName('emailInput')[0].value;
    if (email.length > 0) {
      email = email.split('@');
      if (email[0].length > 0 && email[1] !== undefined) {
        email = email[1].split('.');
        if (email[1] !== undefined && email[1].length > 1) {
          console.log('valid email');
          valid = true;
          context.setState({
            validEmail: true,
          });
        }
      }
    }
    if (!valid) {
      console.log('invalid email');
      context.setState({
        validEmail: false,
      });
    }
  }

  render() {
    return (
      <div id="remindMeComponent">
        {this.state.reminderForm &&
          <div className="reminderFormContainer">
            <button onClick={this.handleExitFormClick}>X</button>
            <h6>{this.state.reminderSet ? 'Project saved.' : 'Remind me'}</h6>
            <p>{this.state.reminderSet ? `We'll remind you 48 hours before this project ends` : `Enter your email address and we'll remind you 48 hours before this project ends.`}</p>
            {this.state.reminderSet ||
              <input className={this.state.validEmail === true ? 'emailInput validEmail' : (this.state.validEmail === false ? 'emailInput invalidEmail' : 'emailInput')} onChange={this.checkEmailValidity} placeHolder="Email Address" />
            }
            {this.state.validEmail === false &&
              <p>Your email is invalid</p>
            }
            <button id="handleEmailSubmit" onClick={this.handleEmailSubmit}>Submit</button>
            <button id="close" onClick={this.handleExitFormClick}>Close</button>
          </div>}
        <button id={this.state.reminderSet ? 'remindMe reminded' : 'remindMe'} onClick={this.handleClick}>Remind me</button>

      </div>
      // conditionally render input form
    );
  }
}

export default RemindMeButton;
