import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import classes from './SignUp.module.scss';

import { updateObject, checkValidity } from '../../shared/utility';

import * as actions from '../../store/actions/index';

class SignUp extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Email'
        },
        value: '',
        validation: {
            required: true
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
            required: true
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
        touched: false
      }
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.controls[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.controls[inputIdentifier].validation),
      touched: true
    });

    const updatedSignInForm = updateObject(this.state.controls, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;

    for (let inputIdentifier in updatedSignInForm) {
      formIsValid = updatedSignInForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({controls: updatedSignInForm, formIsValid: formIsValid});
  }

  render() {
    const formElementsArray = [];

    for(let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
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
          >
            Continuesss
          </Button>
        </form>
      </Modal>
    );
  }
}

export default SignUp;