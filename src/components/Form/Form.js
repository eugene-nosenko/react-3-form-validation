import React, { Component } from 'react';
import photo from "./assets/bond_approve.jpg";
// import {ErrorBoundary} from './ErrorBoundary'
import "./Form.css"

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    showPhoto: false,
    firstNameError: '',
    lastNameError: '',
    passwordError: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validate();

    if (event.target.firstName.value === 'James' && event.target.lastName.value === 'Bond' && event.target.password.value === '007') {
      this.setState({
        showPhoto: true
      });
    }

  }

  validate = () => {
    this.handleFirstNameChange();
    this.handleLastNameChange();
    this.handlePasswordChange();

  }

  handleFirstNameChange = () => {
    if (this.state.firstName === '') {
      this.setState({ firstNameError: 'Нужно имя' });
    } else if (this.state.firstName !== 'James') {
      this.setState({ firstNameError: 'Нужно другое имя' });
    }
  }

  handleLastNameChange = () => {
    if (this.state.lastName === '') {
      this.setState({ lastNameError: 'Нужна фамилия' });
    } else if (this.state.lastName !== 'Bond') {
      this.setState({ lastNameError: 'Нужна другая фамилия' });
    }
  }

  handlePasswordChange = () => {
    if (this.state.password === '') {
      this.setState({ passwordError: 'Нужен пароль' });
    } else if (this.state.password !== '007') {
      this.setState({ passwordError: 'Пароль неправильный' });
    }
  }

  render() {
    if (this.state.showPhoto) {
      return (
        <div className="app-container">
          <img src={photo} alt="" />
        </div>
      )
    }
    else {
      return (
        <div className="app-container">
          <form className="app-container" onSubmit={this.handleSubmit}>

            <p className="field">
              <label className="field__label">Name:</label>
              <input
                className="field__input field-input t-input-firstname"
                type="text"
                name="firstName"
                value={this.firstName}
                onChange={this.handleFirstNameChange}></input>
              <span className="field__error field-error t-error-firstname">{this.state.firstNameError}</span>

            </p>

            <p className="field">
              <label className="field__label">Lastname:</label>
              <input
                className="field__input field-input t-input-lastname"
                type="text"
                name="lastName"
                value={this.lastName}
                onChange={this.handleLastNameChange}></input>
              <span className="field__error field-error t-error-lasttname">{this.state.lastNameError}</span>

            </p>

            <p className="field">
              <label className="field__label">Password:</label>
              <input
                className="field__input field-input t-input-password"
                type="password"
                name="password"
                value={this.password}
                onChange={this.handlePasswordChange}></input>
              <span className="field__error field-error t-error-password">{this.state.password}</span>

            </p>
            <button className="button" type="submit" value="Submit">Send</button>
          </form>
        </div>
      )
    }


  }
}

export default Form
