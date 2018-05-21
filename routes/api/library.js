const express = require('express');
const router = express.Router();
const passport = require('passport');
const keys = require('../../config/keys');

// MODELS
const User = require('../../models/user');
const Library = require('../../models/library');


router.post('/favourites', passport.authenticate('jwt', {session: false}), function (req, res) {
    const favouritesFields = {};
    if (req.body.favId) favouritesFields.favId = req.body.favId;
    if (req.body.mediaType) favouritesFields.mediaType = req.body.mediaType;
    Library.findOne({user: req.user._id}).then(library => {
        if (library) {
            Library.update({user: req.user._id}, {$push: {favourites: favouritesFields}})
                .then(library => res.json(library));
        } else {
            new Library({user: req.user._id, favourites: favouritesFields}).save().then(library => res.json(library));
        }
    });
});

router.get('/favourites', passport.authenticate('jwt', {session: false}), function (req, res) {
    User.findOne({email: 'the_wolf91@libero.it'}).populate('library').exec(function (err, library) {
        console.log(library)
    });
});

module.exports = router;