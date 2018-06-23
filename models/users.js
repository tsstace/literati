module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        /*user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        user_name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        dob: DataTypes.DATE,
        zip: DataTypes.INTEGER
    });
    return User;
}