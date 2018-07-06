module.exports = function(sequelize, DataTypes) {
    var Books = sequelize.define("Books", {
        user: DataTypes.STRING,
        email: {type: DataTypes.STRING, unique: true},
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        copyright_date: DataTypes.DATE,
        ISBN: DataTypes.STRING,
        synopsis: DataTypes.STRING(10000),
        status: {type: DataTypes.ENUM,
                values: ['to read', 'currently reading', 'previously read']
                }
    });
    return Books;
}