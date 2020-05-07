import React ,{Fragment} from 'react';

// For text field input
export  const renderField = ({
    input,
    placeholder,
    className,
    type,
    existed,
    disabled,
    meta: { touched, error, warning,  }
  }) => {
      
    return(
      <Fragment>
        <input {...input} disabled={disabled} placeholder={placeholder} type={type} className={(touched && error) ||(existed&&((existed.status === 805)||(existed.status === 808)||(existed.status === 404)))? 'form-control border border-danger': className}/>
        {touched &&
          ((error && <small className="text-danger">{placeholder}{error}</small>) ||
            (warning && <span>{warning}</span>))}
        {((existed)&&((existed.status === 805) || (existed.status === 808) || (existed.status === 404))) && <small className="text-danger">
            {existed.message}
        </small>}
        
      </Fragment>
    
  )}

export const required =  value => {
  return(value || typeof value === 'number' ? undefined : ' is Required')
}

export const mobileValid = value => {
  var mobilenoregex = /^(?!\b(0)\1+\b)(\+?\d{1,3}[. -]?)?\(?\d{3}\)?([. -]?)\d{3}\3\d{4}$/
  if (value && value.length >= 1) {
      return (mobilenoregex.test(value) ? undefined : 'Enter a Valid Mobile Number')
  } 
  return undefined
}

var letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
export const checkPassword =  value => {
    return(value && value.match(letters) ? undefined : ' between 8 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
}

export const minLength = min => value =>
  value && value.length < min ? ` Must be ${min} characters or more` : undefined

export const minLength13 = minLength(13)

export const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? ' is Invalid'
  : undefined

// Signup Constants
export const GENDERTYPE = [
  {value:"male",data:"Male"},
  {value:"female",data:"Female"},
  {value:"transgender",data:"Transgender"}
]
