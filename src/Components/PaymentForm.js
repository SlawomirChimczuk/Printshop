import React from 'react';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
    let errors = {};
    if (!values.firstName) {
        errors.firstName = 'Please enter your first name'
    } else if (values.firstName.length < 3) {
        errors.firstName = 'Must be 3 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Please enter your last name'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be 2 characters or less'
    }

    if (!values.email) {
        errors.email = 'Please enter your email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.credicard) {
        errors.credicard = 'Please enter your credit card'
    } else if (isNaN(Number(values.credicard))) {
        errors.credicard = 'Must be a number'
    }

  return errors
}

const renderField = ({ input, label, type, meta: { touched, error} }) => (
    <div className="input-wrapper">
        <input {...input} type={type} />
        <label>{label}</label>
        {touched && (error && <span>{error}</span>)}
    </div>
)

const maxLength = max => value => ((value && value.length > max) || (value && value.length < max)) ? `Must have ${max} numbers` : undefined
const maxLength16 = maxLength(16)

export let PaymentForm = ( props ) => {
    const { handleSubmit, submitting } = props

    return (
        <form className="payment-form" onSubmit={handleSubmit(validate)}>
                <Field name="firstName" component={renderField} label="First Name" type="text"/>
                <Field name="lastName" component={renderField} label="Last Name" type="text"/>
                <Field name="email" component={renderField} label="Email" type="email"/>
                <Field name="credicard" component={renderField} validate={maxLength16} label="Credit card" type="number"/>
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    )
}
 
 
PaymentForm = reduxForm({
    form: 'payment',
    validate,
})(PaymentForm);

export default PaymentForm;