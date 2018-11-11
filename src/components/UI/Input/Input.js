import React from 'react';

import classes from './Input.module.scss';

const input = (props) => {
  let inputElement = null;
  const elementClass = props.elementClassName || null ;
  const inputClasses = [classes.InputElement];

  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  if(!props.invalid) {
    inputClasses.push(classes.Valid);
  }

  switch( props.elementType) {
    case('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
      break;
    case('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
      break;
    case('select'):
      inputElement = (<select
        className={inputClasses.join(' ')}
        value={props.value}
        onChange={props.changed}
      >
        {props.elementConfig.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>)
      break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
  }

  let input = (
    <div className={`${classes.Input} ${classes[elementClass]}`}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );

  if(props.labelPosition === 'bottom') {
    input = (
      <div className={`${classes.Input} ${classes[elementClass]}`}>
        {inputElement}
        <label className={classes.Label}>{props.label}</label>
      </div>
    )
  }

  return input;
}

export default input;