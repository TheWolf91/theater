let express = require('express');
let router = express.Router();
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let keys = require('../../config/keys');
let passport = require('passport');

let User = require('../../models/user');

// LOAD INPUT VALIDATIONS
const validateSignupInput = require('../../validation/signup');
const validateSigninInput = require('../../validation/signin');
const validateAccountSettingsInput = require('../../validation/account-settings');
const validateAccountPasswordInput = require('../../validation/account-password');

// USER REGISTRATION
router.post('/signup', function (req, res, next) {
    const {errors, isValid} = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email}, function (user) {
        if (user) {
            return res.status(400).json({
                title: 'Email already exists'
            });
        }
    });

    let user = new User({
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: bcrypt.hashSync(req.body.password, 10)

    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred during the signup',
                error: err
            })
        }
        res.status(201).json({
            title: 'User created',
            obj: result
        })
    });
});

// USER LOGIN
router.post('/signin', function (req, res, next) {
    const {errors, isValid} = validateSigninInput(req.body);

    if (!isValid) {
        return res.status(500).json(errors);
    }

    User.findOne({email: req.body.email}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        let payload = {id: user._id, username: user.username, email: user.email};
        let token = jwt.sign(payload, keys.secretOrKey, {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});

// GET ACCOUNT INFO
router.get('/account', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    res.status(200).json({
        username: req.user.username,
        email: req.user.email
    })
});

// UPDATE ACCOUNT FIELDS
router.put('/account', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    const {errors, isValid} = validateAccountSettingsInput(req.body);

    if (!isValid) {
        return res.status(500).json(errors);
    }

    User.findByIdAndUpdate({_id: req.user.id}, {
        username: req.body.username,
        email: req.body.email
    }, {new: true}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred during the user update',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'User not found',
                error: {message: 'User not found during its update'}
            });
        }
        res.status(200).json({
            title: 'User correctly updated',
            obj: user
        });
    });
});

// CHANGE PASSWORD
router.put('/account/password', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    const {errors, isValid} = validateAccountPasswordInput(req.body);

    if (!isValid) {
        return res.status(500).json(errors);
    }

    User.findOne({_id: req.user.id}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'User not found',
                error: {message: 'User not found during its password change'}
            });
        }
        if (!bcrypt.compareSync(req.body.oldPassword, user.password)) {
            return res.status(500).json({
                title: 'Old password is wrong',
                error: {message: 'Old password doesn\'t match'}
            });
        }
        user.password = bcrypt.hashSync(req.body.password);
        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred during save',
                    error: err
                });
            }
            res.status(200).json({
                title: 'Password successfully changed',
                obj: result
            })
        });
    });
});

module.exports = router;