import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import classes from './SignUp.module.scss';

import { updateObject, checkValidity } from '../../shared/utility';

import * as actions from '../../store/actions';

class SignUp extends Component {
  state = {
    signUpForm: {
      email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Email'
        },
        value: '',
        validation: {
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password'
        },
        value: '',
        validation: {
          minLength: 6
        },
        valid: false,
        touched: false
      },
      remeber: {
        label: 'Please do not email me Netflix special offers.',
        labelPostion: 'bottom',
        elementClassName: 'Checkbox',
        elementConfig: {
          type: 'checkbox',
        },
        value: '',
        validation: {
            required: false
        },
        valid: true,
        touched: false
      }
    },
    isSignUp: true,
    formIsValid: false
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.signUpForm.email.value,
      this.state.signUpForm.password.value,
      this.state.isSignUp
    );
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.signUpForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.signUpForm[inputIdentifier].validation),
      touched: true
    });

    const updatedSignUpForm = updateObject(this.state.signUpForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;

    for (let inputIdentifier in updatedSignUpForm) {
      formIsValid = updatedSignUpForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      signUpForm: updatedSignUpForm,
      formIsValid: formIsValid
    });
  }

  render() {
    const formElementsArray = [];

    for(let key in this.state.signUpForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signUpForm[key]
      })
    }

    return (
      <Modal show={true}>
        <form className={classes.SignIn} onSubmit={(event) => this.submitHandler(event)}>
          <div className={classes.SignIn__title}>
            <p><strong>Sign up to start your free month</strong></p>
            <p>We hate paperwork, too.,</p>
            <p>Just two more steps and you're done!</p>
            <p><strong>Create your account.</strong></p>
          </div>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              label={formElement.config.label}
              labelPosition={formElement.config.labelPostion}
              elementClassName={formElement.config.elementClassName}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
          ))}

          <div className={classes.RestorePassword}>
            <a className={classes.Link} href="">Need Helpss?</a>
          </div>

          <Button
            btnType="Danger"
            disabled={!this.state.formIsValid}
          >
            Continuesss
          </Button>
        </form>
      </Modal>
    );
  }
}

export default SignUp;