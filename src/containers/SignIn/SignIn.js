import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import classes from './SignIn.module.scss';

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
            required: true
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
            required: true
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
            required: false
        },
        touched: false
      }
    }
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
        <h1 className={classes.SignIn__title}>Sign In</h1>
        <form className={classes.SignIn} onSubmit={this.signInHandler}>
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
          >
            Sign In
          </Button>
        </form>
      </Modal>
    );
  }
}

export default SignIn;