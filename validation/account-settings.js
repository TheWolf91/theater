const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAccountSettingsInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';

    if(!Validator.isLength(data.username, {min: 4, max: 10})) {
        errors.username = 'Username length must be between 4 and 10'
    }

    if (!Validator.isAlphanumeric(data.username)) {
        errors.username = 'Username can contain only letters and numbers'
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is not valid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};