module.exports = function(sequelize, DataTypes) {
    var Recommendations = sequelize.define("Recommendations", {
        user: DataTypes.STRING,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        comment: DataTypes.STRING
    });
    return Recommendations;
}