const passport = require('passport');
const { passwordMatch } = require('../validations/authValidations');
const { requireField, isEmail } = require('../validations/commonValidations');
const userSchema = require('../models/user');
const jwt = require('jsonwebtoken');

const registerUser = (req, res) => {
    let userDetails = req.body;
    if (!passwordMatch(userDetails.password, userDetails.cPassword)) {
        res.status(400).json({ error: passwordMatch(userDetails.password, userDetails.cPassword).error });
    }
    if (!requireField(userDetails.email, "Email")) {
        res.status(400).json({ error: requireField(userDetails.email, "Email").error });
    }
    if (!isEmail(userDetails.email)) {
        res.status(400).json({ error: isEmail(userDetails.email).error });
    }
    userSchema.create(userDetails)
        .then((user) => {
            res.status(200).json(user);
        }).catch(err => {
            res.status(400).json(err);
        })
};

const loginUser = (req, res, next) => {
    passport.authenticate('login', async (err, user) => {
        if (err) return res.status(401).json(err);
        if (!user) return res.status(401).json({ message: "unautherized" })
        let accessToken = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.SECRET_KEY,
            { expiresIn: '168h' }
        )
        userSchema.findOneAndUpdate({email: user.email}, {login: true})
            .then((user) => {
                return res.status(200).json({ accessToken });
            }).catch(err => {
                res.status(400).json(err);
            })
    })(req, res, next);
}

const logout = (req, res) => {
    userSchema.findOneAndUpdate({email: req.user.email}, {login: false})
        .then((user) => {
            res.status(200).json("Successfully logout");
        }).catch(err => {
            res.status(400).json(err);
        })
}

module.exports = {
    registerUser,
    loginUser,
    logout
};
