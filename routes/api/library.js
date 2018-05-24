const express = require('express');
const router = express.Router();
const passport = require('passport');

// LOAD INPUT VALIDATIONS
const validateLibraryInput = require('../../validation/library');

// MODELS
const User = require('../../models/user');
const Library = require('../../models/library');


router.post('/favourites', passport.authenticate('jwt', {session: false}), function (req, res) {
    const {errors, isValid} = validateLibraryInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    if (!req.user.isVerified) {
        return res.status(400).json({
            error: 'You must activate your account first'
        });
    }

    Library.findOne({user: req.user._id}).then(library => {
        if (library) {
            // Check if media already exists
            Library.aggregate([
                {$match: {user: req.user._id}},
                {$project: {_id: 0, mediaId: '$favourites.mediaId', mediaType: '$favourites.mediaType'}}
            ], function (err, results) {
                if (results[0].mediaId.indexOf(req.body.mediaId) !== -1) {
                    let n = results[0].mediaId.indexOf(req.body.mediaId);
                    if (results[0].mediaType[n] === req.body.mediaType) {
                        return res.status(400).json({
                            title: 'Already in your library',
                            error: 'Media is already in your favourites'
                        });
                    }
                }
                Library.update({user: req.user._id}, {$push: {favourites: req.body}})
                    .then(library => res.json({title: 'Successfully added to your favourites'}));
            });
        } else {
            new Library({user: req.user._id, favourites: req.body}).save()
                .then(library => {
                    User.findOne({_id: req.user._id}, function (err, user) {
                        if (err) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            });
                        }
                        if (!user) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: 'Unable to find this user'
                            });
                        }
                        user.library = library;
                        user.save(function (err, user) {
                            if (err) {
                                return res.status(500).json({
                                    title: 'An error occurred',
                                    error: err
                                });
                            }
                            return res.json({title: 'Successfully added to your favourites'});
                        })
                    });
                });
        }
    });
});

router.get('/favourites', passport.authenticate('jwt', {session: false}), function (req, res) {
    User.findOne({_id: req.user._id}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
    }).populate('library').exec(function (err, foundUser) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        if (!foundUser.library) {
            return res.status(400).json({
                title: 'User still doesn\'t have a library'
            });
        }
        res.status(200).json(foundUser.library.favourites);
    });
});

router.post('/likes', passport.authenticate('jwt', {session: false}), function (req, res) {
    const {errors, isValid} = validateLibraryInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    if (!req.user.isVerified) {
        return res.status(400).json({
            error: 'You must activate your account first'
        });
    }

    Library.findOne({user: req.user._id}).then(library => {
        if (library) {
            // Check if media already exists
            Library.aggregate([
                {$match: {user: req.user._id}},
                {$project: {_id: 0, mediaId: '$likes.mediaId', mediaType: '$likes.mediaType'}}
            ], function (err, results) {
                if (results[0].mediaId.indexOf(req.body.mediaId) !== -1) {
                    let n = results[0].mediaId.indexOf(req.body.mediaId);
                    if (results[0].mediaType[n] === req.body.mediaType) {
                        return res.status(400).json({
                            title: 'Already in your library',
                            error: 'Media is already in your likes'
                        });
                    }
                }
                Library.update({user: req.user._id}, {$push: {likes: req.body}})
                    .then(library => res.json({title: 'Successfully added to your likes'}));
            });
        } else {
            new Library({user: req.user._id, likes: req.body}).save()
                .then(library => {
                    User.findOne({_id: req.user._id}, function (err, user) {
                        if (err) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            });
                        }
                        if (!user) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: 'Unable to find this user'
                            });
                        }
                        user.library = library;
                        user.save(function (err, user) {
                            if (err) {
                                return res.status(500).json({
                                    title: 'An error occurred',
                                    error: err
                                });
                            }
                            return res.json({title: 'Successfully added to your likes'});
                        })
                    });
                });
        }
    });
});

router.get('/likes', passport.authenticate('jwt', {session: false}), function (req, res) {
    User.findOne({_id: req.user._id}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
    }).populate('library').exec(function (err, foundUser) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        if (!foundUser.library) {
            return res.status(400).json({
                title: 'User still doesn\'t have a library'
            });
        }
        res.status(200).json(foundUser.library.likes);
    });
});

router.post('/alreadyfavourite', passport.authenticate('jwt', {session:false}), function (req, res) {
    Library.aggregate([
        {$match: {user: req.user._id}},
        {$project: {_id: 0, mediaId: '$favourites.mediaId', mediaType: '$favourites.mediaType'}}
    ], function (err, results) {
        if (results[0].mediaId.indexOf(req.body.mediaId) !== -1) {
            let n = results[0].mediaId.indexOf(req.body.mediaId);
            if (results[0].mediaType[n] === req.body.mediaType) {
                return res.json(true);
            }
        }
        return res.json(false);
    });
});

router.post('/alreadyliked', passport.authenticate('jwt', {session:false}), function (req, res) {
    Library.aggregate([
        {$match: {user: req.user._id}},
        {$project: {_id: 0, mediaId: '$likes.mediaId', mediaType: '$likes.mediaType'}}
    ], function (err, results) {
        if (results[0].mediaId.indexOf(req.body.mediaId) !== -1) {
            let n = results[0].mediaId.indexOf(req.body.mediaId);
            if (results[0].mediaType[n] === req.body.mediaType) {
                return res.json(true);
            }
        }
        return res.json(false);
    });
});

module.exports = router;