module.exports = function(sequelize, DataTypes) {
    var Recommendations = sequelize.define("Recommendations", {
        user: DataTypes.STRING,
        email: DataTypes.STRING,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        ISBN: DataTypes.STRING,
        cover_art_url: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
    });
    return Recommendations;
}