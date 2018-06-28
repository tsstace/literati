module.exports = function(sequelize, DataTypes) {
    var Recommendations = sequelize.define("Recommendations", {
        user: DataTypes.STRING,
        book_id: DataTypes.INTEGER,
        rating: DataTypes.INTEGER,
        //time_stamp:  {type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        likes: DataTypes.INTEGER
    });
    return Recommendations;
}