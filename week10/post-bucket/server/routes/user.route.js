const Users = require("../controllers/Users.controller");
const { authenticated } = require("../config/jwt.config");


module.exports = app => {

    // this is temporary
    app.get("/api/users", authenticated, Users.getAll);
    // like a create
    app.post("/api/users", Users.register);
    app.get("/api/users/session", Users.getOne);
    app.post("/api/users/session", Users.login);
    app.delete("/api/users/session", Users.logout);
}