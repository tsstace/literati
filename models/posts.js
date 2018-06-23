module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        /*comment_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        subject: DataTypes.STRING,
        body_text: DataTypes.STRING,
        category: DataTypes.STRING,
        like: DataTypes.BOOLEAN,
        book_id: DataTypes.INTEGER
    });
    return Comments;
}