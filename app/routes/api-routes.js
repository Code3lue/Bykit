var db = require("../models");

module.exports = function(app) {
    app.get("/api/login", function(req, res) {
   db.Test2.find({
    where: Sequelize.or({ username: username }, { password: password })
}).success(function (user) {
    if (!user) {
        db.Test2.create({ username: username, password: password });
    }
});
res.json(user)
    });
}