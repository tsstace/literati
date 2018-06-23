module.exports = function(sequelize, DataTypes) {
    var Authors = sequelize.define("Authors", {
        /*author_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        nationality: DataTypes.STRING,
        gender: DataTypes.STRING,
    });
    return Authors;
}