const express = require('express');
const router = express.Router();
const passport = require('passport');
const keys = require('../../config/keys');

// LOAD INPUT VALIDATIONS
const validateLibraryInput = require('../../validation/library');

// MODELS
const User = require('../../models/user');
const Library = require('../../models/library');


router.post('/favourites', passport.authenticate('jwt', {session: false}), function (req, res) {
    const {isValid, errors} = validateLibraryInput(req.body);

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
            Library.update({user: req.user._id}, {$push: {favourites: req.body}})
                .then(library => res.json(library));
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
                            return res.status(200).json(user);
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
    const {isValid, errors} = validateLibraryInput(req.body);

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
            Library.update({user: req.user._id}, {$push: {likes: req.body}})
                .then(library => res.json(library));
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
                            return res.status(200).json(user);
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

module.exports = router;