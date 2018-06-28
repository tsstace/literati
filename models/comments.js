module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        user: DataTypes.STRING,
        book_id: DataTypes.INTEGER,
        body: DataTypes.STRING,
        //time_stamp:  {type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
    return Comments;
}