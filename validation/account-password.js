const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAccountPasswordInput(data) {
    let errors = {};

    data.oldPassword = !isEmpty(data.oldPassword) ? data.oldPassword : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

    if (!Validator.isLength(data.password, {min: 8, max: 16})) {
        errors.newPassword = 'Password length must be between 8 and 16'
    }

    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'This password and new password don\'t match'
    }

    if (Validator.isEmpty(data.oldPassword)) {
        errors.oldPassword = 'Old password field is required'
    }

    if (Validator.isEmpty(data.password)) {
        errors.newPassword = 'New password field is required'
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm password field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};