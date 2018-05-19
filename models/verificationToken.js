let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let verificationTokenSchema = Schema({
    _userId: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
    token: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now, expires: 43200}
});

module.exports = mongoose.model('VerificationToken', verificationTokenSchema);