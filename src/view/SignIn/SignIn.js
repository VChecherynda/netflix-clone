import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './SignIn.module.scss';

import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import { updateObject, checkValidity } from '../../shared/utility';

class SignIn extends Component {
  state = {
    signInForm: {
      email: {
        label: 'Enter email or Phone number',
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
        label: 'Password',
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
        label: 'Remember me?',
        labelPostion: 'bottom',
        elementClassName: 'Checkbox',
        elementConfig: {
          type: 'checkbox',
        },
        value: '',
        validation: {
            required: true
        },
        valid: true,
        touched: false
      }
    },
    isSignUp: false,
    formIsValid: false
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.signInForm.email.value,
      this.state.signInForm.password.value,
      this.state.isSignUp
    );
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.signInForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.signInForm[inputIdentifier].validation),
      touched: true
    });

    const updatedSignInForm = updateObject(this.state.signInForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;

    for (let inputIdentifier in updatedSignInForm) {
      formIsValid = updatedSignInForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({signInForm: updatedSignInForm, formIsValid: formIsValid});
  }

  render() {
    const formElementsArray = [];

    for(let key in this.state.signInForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signInForm[key]
      })
    }

    return (
      <Modal show={true}>
        <form className={classes.SignIn} onSubmit={this.submitHandler}>
          <h1 className={classes.SignIn__title}>Sign In</h1>
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
            <a className={classes.Link} href="">Need Help?</a>
          </div>

          <Button
            btnType="Danger"
            disabled={!this.state.formIsValid}
          >
            Sign In
          </Button>
        </form>

        <div className={classes.SignUpLink}>
          <span>New to Netflix? </span>
          <NavLink
              to='/sign-up'
              exact
              className={classes.Link}
              activeClassName={classes.active}
            >
              Sign Up
            </NavLink>
        </div>
      </Modal>
    );
  }
}

export default SignIn;