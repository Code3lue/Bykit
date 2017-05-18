var db = require("../models");

module.exports = function(app) {
    app.get("/api/signin/", function(req, res) {
   db.Test2.find({
    where: Sequelize.or({ username: desiredUsername }, { email: emailAddress })
}).success(function (user) {
    if (!user) {
        db.Test2.create({ username: desiredUsername, email: emailAddress });
    }
});
res.json(user)
    });
}