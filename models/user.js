const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');
const beautifulUniqueValidation = require('mongoose-beautiful-unique-validation');

const userSchema = Schema({
    username: {type: String, minlength: 4, maxlength: 10, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isVerified: { type: Boolean, default: false },
    library: {type: Schema.Types.ObjectId, ref: 'Library'}
}, { timestamps: true});

userSchema.plugin(mongooseUniqueValidator);
userSchema.plugin(beautifulUniqueValidation);

module.exports = mongoose.model('User', userSchema);