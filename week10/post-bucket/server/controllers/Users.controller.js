const { secret } = require("../config/jwt.config");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Doesn't fall under the normal REST pattern
class UserController {

    getOne(req, res) {
        // TODO: return the user if they are logged in
        console.log(req.method, req.url);
        console.log(req.cookies.usertoken);
        jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
            console.log(payload);
            if(err) {
                return res.json({user: null});
            }
            User.findOne({_id: payload._id})
                .then(user => res.json({user}))
                .catch(err => res.json({user: null}));
        });
    }

    getAll(req, res) {
        // TODO: maybe it's not a good idea to have this
        User.find()
            .then(users => res.json(users))
            .catch(err => res.json(err));
    }

    register(req, res) {
        User.create(req.body)
            .then(user => res
                .cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true})
                .json({ msg: "massive win", user }))
            .catch(err => res.json(err));
    }

    login(req, res) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user === null) {
                    res.json({ msg: "Invalid login attempt" });
                } else {
                    // don't forget to import bcrypt
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if (passwordIsValid) {
                                res
                                    .cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true})
                                    .json({ msg: "massive win", user });
                            } else {
                                res.json({ msg: "Invalid login attempt" });
                            }
                        })
                        .catch(err => res.json({ msg: "Invalid login attempt" }));
                }
            })
            .catch(err => res.json(err));
    }



    logout(req, res) {
        res.clearCookie("usertoken");
        res.json({msg: "goodbye!"})
    }

}

module.exports = new UserController();