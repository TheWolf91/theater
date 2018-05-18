let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');

let userSchema = Schema({
    username: {type: String, minlength: 4, maxlength: 10, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, { timestamps: true});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);