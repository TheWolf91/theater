const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

// MODELS
const User = require('../../models/user');
const VerificationToken = require('../../models/verificationToken');

// LOAD INPUT VALIDATIONS
const validateSignupInput = require('../../validation/signup');
const validateSigninInput = require('../../validation/signin');
const validateAccountSettingsInput = require('../../validation/account-settings');
const validateAccountPasswordInput = require('../../validation/account-password');

// USER REGISTRATION
router.post('/signup', function (req, res) {
    const {errors, isValid} = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Check if email already exists
    User.findOne({email: req.body.email}, function (user) {
        if (user) {
            return res.status(400).json({
                title: 'Email already exists'
            });
        }
    });
    // Create and save the new user
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
            });
        }
        res.status(201).json({
            title: 'User created',
            obj: result
        });
        // Create a verification token for this user
        let verificationToken = new VerificationToken({
            _userId: user._id,
            token: crypto.randomBytes(16).toString('hex')
        });
        verificationToken.save(function (err) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            // Send the email
            let transporter = nodemailer.createTransport({
                host: process.env.emailHost,
                auth: {user: process.env.emailUser, pass: process.env.emailPassword}
            });
            // Set email template
            transporter.use('compile', hbs({
                viewPath: 'views/email',
                extName: '.hbs'
            }));
            let mailOptions = {
                from: process.env.emailEmail, to: user.email, subject: 'Theater - Activate your account',
                template: 'account-activation',
                context: {
                    activationLink: 'http://' + req.headers.host + '/user/confirmation/' + verificationToken.token,
                    username: req.body.username
                },
            };
            transporter.sendMail(mailOptions, function (err) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    title: 'User successfully saved'
                });
            });
        });
    });
});

// USER LOGIN
router.post('/signin', function (req, res) {
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
        let token = jwt.sign(payload, process.env.secretOrKey, {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});

// GET ACCOUNT INFO
router.get('/account', passport.authenticate('jwt', {session: false}), function (req, res) {
    res.status(200).json({
        username: req.user.username,
        email: req.user.email
    })
});

// UPDATE ACCOUNT FIELDS
router.put('/account', passport.authenticate('jwt', {session: false}), function (req, res) {
    const {errors, isValid} = validateAccountSettingsInput(req.body);

    if (!isValid) {
        return res.status(500).json(errors);
    }

    User.findByIdAndUpdate({_id: req.user.id}, {
        username: req.body.username.toLowerCase(),
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
router.put('/account/password', passport.authenticate('jwt', {session: false}), function (req, res) {
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

// CHECK VERIFICATION TOKEN
router.post('/confirmation', function (req, res) {
    VerificationToken.findOne({token: req.body.token}, function (err, token) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred during save',
                error: err
            });
        }
        if (!token) {
            return res.status(500).json({
                title: 'Token doesn\'t exists',
                error: 'Unable to find this token or token has expired'
            });
        }
        User.findOne({_id: token._userId}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!user) {
                return res.status(500).json({
                    title: 'User not found',
                    error: {message: 'User not found by the provided verification token'}
                });
            }
            if (user.isVerified) {
                return res.status(400).json({
                    error: 'This account has been already activated'
                });
            }
            user.isVerified = true;
            user.save(function (err) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                return res.status(200).json({
                    title: 'User has been correctly activated'
                });
            })
        });
    });
});

// RESEND VERIFICATION TOKEN
router.get('/resend', passport.authenticate('jwt', {session: false}), function (req, res) {
    User.findOne({_id: req.user.id}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user.isVerified) {
            return res.status(400).json({
                title: 'Account already activated'
            });
        }
        // Create a new verification token
        let verificationToken = new VerificationToken({
            _userId: user._id,
            token: crypto.randomBytes(16).toString('hex')
        });
        verificationToken.save(function (err) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
        });
        //Send the email
        let transporter = nodemailer.createTransport({
            host: process.env.emailHost,
            auth: {user: process.env.emailUser, pass: process.env.emailPassword}
        });
        // Set email template
        transporter.use('compile', hbs({
            viewPath: 'views/email',
            extName: '.hbs'
        }));
        let mailOptions = {
            from: process.env.emailEmail, to: user.email, subject: 'Theater - Activate your account',
            template: 'account-activation',
            context: {
                activationLink: 'https://' + req.headers.host + '/user/confirmation/' + verificationToken.token,
                username: req.body.username
            },
        };
        transporter.sendMail(mailOptions, function (err) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                title: 'A new activation link has been sent to ' + user.email
            });
        });
    });
});

module.exports = router;