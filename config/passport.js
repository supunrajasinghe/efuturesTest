const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userSchema = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
opts.passReqToCallback = true;

passport.use('login', new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try {
            if (!username || !password || username === "") return done({ message: "username or password incorrect" }, false);
            let user = await userSchema.findOne({ email: username });
            if (!user) return done({ message: "user not found" }, false);
            const validate = await user.isValidPassword(password);
            if (validate) return done(null, user, { message: 'Logged in Successfully' });
            if (!validate) return done({ message: "password incorrect" }, false);
            return done({ message: "something wrong" }, false);

        } catch (error) {
            console.log(error);
        }
    }
));

passport.use('jwt',
    new JwtStrategy(opts, (req, jwt_payload, done) => {
        userSchema.findOne({_id: jwt_payload.id})
            .then(user => {
                if(!user.login) return done(null, false);
                req.user = user;
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    })
);