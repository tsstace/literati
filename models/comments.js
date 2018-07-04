module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        // user: DataTypes.STRING,
        // book_id: DataTypes.INTEGER,
        // body: DataTypes.STRING,
        //time_stamp:  {type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        user: DataTypes.STRING,
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
    });
    return Comments;
}