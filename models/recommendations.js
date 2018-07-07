module.exports = function(sequelize, DataTypes) {
    var Recommendations = sequelize.define("Recommendations", {
        user: DataTypes.STRING,
        email: DataTypes.STRING,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        ISBN: DataTypes.STRING,
        cover_art_url: DataTypes.STRING,
        rating: DataTypes.INTEGER,
<<<<<<< HEAD
        comment: DataTypes.TEXT,
=======
        comment: DataTypes.STRING,
>>>>>>> fae4f9bf04b6bb97a8e9ff4fde0da57f3cb25d7b
    });
    return Recommendations;
}
