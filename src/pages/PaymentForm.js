import React from 'react';
import {Field, reduxForm} from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 3) {
        errors.firstName = 'Must be 3 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be 2 characters or less'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.credicard) {
        errors.credicard = 'Required'
    } else if (isNaN(Number(values.credicard))) {
        errors.credicard = 'Must be a number'
    } else if (Number(values.credicard) === 16) {
        errors.credicard = 'Card number should have 16 numbers'
    }
  return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} />
            <label>{label}</label>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

export let PaymentForm = (props) => {

    const { handleSubmit, submitting } = props
    return (
        <form className="payment-form" onSubmit={handleSubmit}>
            <div>
                <Field name="firstName" component={renderField} label="First Name" type="text"/>
                {/* <label htmlFor="firstName">First Name</label> */}
            </div>
            <div>
                <Field name="lastName" component={renderField} label="Last Name" type="text"/>
                {/* <label htmlFor="lastName">Last Name</label> */}
            </div>
            <div>
                <Field name="email" component={renderField} label="email" type="email"/>
                {/* <label htmlFor="email">Email</label> */}
            </div>
            <div>
                <Field name="credicard" component={renderField} label="credicard" type="number"/>
                {/* <label htmlFor="credicard">Credit Card</label> */}
            </div>
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    )
}
 
 
PaymentForm = reduxForm({
    form: 'payment',
    validate,
})(PaymentForm);

export default PaymentForm