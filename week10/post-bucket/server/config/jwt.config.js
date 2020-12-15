const jwt = require("jsonwebtoken");

const secret = "I cannot believe this key is so secret" // obviously change this in production

module.exports.secret = secret;

module.exports.authenticated = function (req, res, next) {
    console.log(req.method, req.url);
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}