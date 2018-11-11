import React from 'react';

import classes from './ResetPassword.module.scss';

import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import { updateObject, checkValidity } from '../../shared/utility';

class PasswordReset extends React.Component {
  state = {
    resetForm: {
      email: {
        label: 'Enter email',
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
        touched: false,
        requestType: 'PASSWORD_RESET',
      }
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onResetPassword(
      this.state.resetForm.email.value,
      this.state.resetForm.email.requestType
    );
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.resetForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.resetForm[inputIdentifier].validation),
      touched: true
    });

    const updatedForm = updateObject(this.state.signInForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;

    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({resetForm: updatedForm, formIsValid: formIsValid});
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
            disabled={!this.state.formIsValid}
          >
            Reset Password
          </Button>
         </form>
      </Modal>
   )
 }
}

export default PasswordReset
