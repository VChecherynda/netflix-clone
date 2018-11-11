import React from 'react';

import classes from './ResetPassword.module.scss';

import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import { updateObject, checkValidity } from '../../shared/utility';

class PasswordReset extends React.Component {
  state = {
    resetForm: {
      password: {
        label: 'Enter new password',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          minLength: 6
        },
        touched: false,
      },
      confirmPassword: {
        label: 'Confirm password',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          minLength: 6
        },
        touched: false,
      },
    },
    passwordIsValid: false
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onResetPassword(
      this.state.resetForm.password.value,
    );
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.resetForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.resetForm[inputIdentifier].validation),
      touched: true
    });

    const updatedForm = updateObject(this.state.resetForm, {
      [inputIdentifier]: updatedFormElement
    });

    let passwordIsValid = updatedForm.password.value === updatedForm.confirmPassword.value;

    this.setState({resetForm: updatedForm, passwordIsValid: passwordIsValid});
  }

  render() {

    const formElementsArray = [];

    for(let key in this.state.resetForm) {
      formElementsArray.push({
        id: key,
        config: this.state.resetForm[key]
      })
    }

    return(

      <Modal show={true}>
        <form className={classes.ResetPassword} onSubmit={this.submitHandler}>
          <h1 className={classes.ResetPassword__title}>Reset password</h1>
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
          <Button
            btnType="Danger"
            disabled={!this.state.passwordIsValid}
          >
            Reset Password
          </Button>
         </form>
      </Modal>
   )
 }
}

export default PasswordReset
