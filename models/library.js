const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const librarySchema = new Schema({
    likes: [{
        likeId: {type: String},
        mediaType: {type: String}
    }],
    favourites: [{
        favId: {type: String},
        mediaType: {type: String}
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

librarySchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Library', librarySchema);