const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSignupInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

    if (!Validator.isLength(data.username, {min: 4, max: 10})) {
        errors.username = 'Username length must be between 4 and 10';
    }

    if (!Validator.isAlphanumeric(data.username)) {
        errors.username = 'Username can contain only letters and numbers'
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is not valid';
    }

    if (!Validator.isLength(data.password, {min: 8, max: 16})) {
        errors.password = 'Password length must be between 8 and 16';
    }

    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match'
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};