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

router.post('/alreadyfavourite', passport.authenticate('jwt', {session: false}), function (req, res) {
    Library.findOne({user: req.user.id}, function (err, libraryFound) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (libraryFound) {
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

        } else {
            res.status(400).send();
        }

    });
});

router.post('/alreadyliked', passport.authenticate('jwt', {session: false}), function (req, res) {
    Library.findOne({user: req.user.id}, function (err, libraryFound) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (libraryFound) {
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
        } else {
            res.status(400).send();
        }
    });
});

router.delete('/favourites', passport.authenticate('jwt', {session: false}), function (req, res) {
    let index = null;
    Library.aggregate([
        {$match: {user: req.user._id}},
        {$project: {_id: 0, empty: '$favourites.null', mediaId: '$favourites.mediaId', mediaType: '$favourites.mediaType'}}
    ], function (err, results) {
        if (results[0].mediaId.indexOf(req.query.mediaId) !== -1) {
            index = results[0].mediaId.indexOf(req.query.mediaId);
            if (results[0].mediaType[index] === req.query.mediaType) {
                // Removes nulls
                Library.findOneAndUpdate({}, {$pull: {favourites: null}}, function (err, results) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                });
                //Remove index
                let query = 'favourites.' + index;
                Library.findOneAndUpdate({user: req.user.id}, {$unset: {[query]: 1}}, {new: true}, function (err, results) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    res.status(200).json({title: 'Media removed from favourites'});
                });
            }
        }
    });
});

router.delete('/likes', passport.authenticate('jwt', {session: false}), function (req, res) {
    let index = null;
    Library.aggregate([
        {$match: {user: req.user._id}},
        {$project: {_id: 0, empty: '$likes.null', mediaId: '$likes.mediaId', mediaType: '$likes.mediaType'}}
    ], function (err, results) {
        console.log(results);
        if (results[0].mediaId.indexOf(req.query.mediaId) !== -1) {
            index = results[0].mediaId.indexOf(req.query.mediaId);
            if (results[0].mediaType[index] === req.query.mediaType) {
                // Removes nulls
                Library.findOneAndUpdate({}, {$pull: {likes: null}}, function (err, results) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                });
                //Remove index
                let query = 'likes.' + index;
                Library.findOneAndUpdate({user: req.user.id}, {$unset: {[query]: 1}}, {new: true}, function (err, results) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    res.status(200).json({title: 'Media removed from likes'});
                });
            }
        }
    });
});

module.exports = router;