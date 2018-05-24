const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const librarySchema = new Schema({
    likes: [{
        mediaId: {type: String, required: true, unique: true},
        mediaType: {type: String, required: true},
        title: {type: String, required: true},
        poster: {type: String}
    }],
    favourites: [{
        mediaId: {type: String, required: true, unique: true},
        mediaType: {type: String, required: true},
        title: {type: String, required: true},
        poster: {type: String}
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

librarySchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Library', librarySchema);