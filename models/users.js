module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id_token: DataTypes.STRING,
        profile_pic: DataTypes.STRING,
        user_name: DataTypes.STRING,
        email: DataTypes.STRING
    });
    return User;
}