const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLibraryInput(data) {
    let errors = {};

    data.mediaId = !isEmpty(data.mediaId) ? data.mediaId : '';
    data.mediaType = !isEmpty(data.mediaType) ? data.mediaType : '';
    data.title = !isEmpty(data.title) ? data.title : '';

    if (!Validator.equals(data.mediaType, 'movie') && !Validator.equals(data.mediaType, 'serie')) {
        errors.mediaType = 'MediaType only allows \'movie\' and \'serie\''
    }

    if (Validator.isEmpty(data.mediaId)) {
        errors.mediaId = 'MediaId field is required';
    }

    if (Validator.isEmpty(data.mediaType)) {
        errors.mediaType = 'MediaType field is required';
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};