
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        locality: DataTypes.STRING,
        country: DataTypes.STRING
    
    });


    return user;

}


