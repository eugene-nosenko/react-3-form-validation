import React, { Component } from 'react';
import photo from "./assets/bond_approve.jpg";
import "./Form.css"

const formData = {
  firstname: {
    value: 'james',
    error: 'Имя указано не верно',
    errorEmpty: 'Нужно указать имя'
  },
  lastname: {
    value: 'bond',
    error: 'Фамилия указана не верно',
    errorEmpty: 'Укажите фамилию'

  },
  password: {
    value: '007',
    error: 'Пароль указан не верно',
    errorEmpty: 'Нужно указать пароль'

  }

}

class Form extends React.Component {
  state = {
    errors: {},
    isValidate: false,
    values: { firstName: '', lastName: '', password: '' }
  };

  changeInput = event => {
    const target = event.target;
    this.setState({
      values: { ...this.state.values, ... { [target.name]: target.value } },
      errors: {}
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};


    Object.keys(formData).forEach(key => {
      if (this.state.values[key] === '') {
        errors[key] = formData[key].errorEmpty;
        console.log(this.state.values[key]);
        console.log(formData[key].value);
      } else if (this.state.values[key].toLowerCase() !== formData[key].value) {
        errors[key] = formData[key].error;
      }
    });

    this.setState({
      errors,
      isValidate: Object.keys(errors).length === 0
    });

  };

  render() {
    const { isValidate, values, errors } = this.state; // деструкторизация чтобы не высовывать постояяно данные по одному

    return (
      <div className="app-container">
        {!isValidate ? (
          <form className="app-container" onSubmit={this.handleSubmit}>

            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Name:</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                type="text"
                name="firstname"
                value={values['firstname']}
                onChange={this.changeInput}></input>
              <span className="field__error field-error t-error-firstname">
                {errors['firstname']}
              </span>

            </p>

            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Lastname:</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                type="text"
                name="lastname"
                value={values['lastname']}
                onChange={this.changeInput}></input>
              <span className="field__error field-error t-error-lastname">
                {errors['lastname']}
              </span>

            </p>

            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Password:</span>
              </label>
              <input
                className="field__input field-input t-input-password"
                type="password"
                name="password"
                value={values['password']}
                onChange={this.changeInput}></input>
              <span className="field__error field-error t-error-password">
                {errors['password']}
              </span>

            </p>
            <div className="form__button">
              <input
                className="button t-submit"
                type="submit"
                value="Проверить" />
            </div>

          </form>
        ) : (
            <img src="{photo}" alt="bond approve" className="t-bond-image" />
          )}

      </div>
    );
  }

}


export default Form
