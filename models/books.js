module.exports = function(sequelize, DataTypes) {
    var Books = sequelize.define("Books", {
        user_name: DataTypes.STRING,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        copyright_date: DataTypes.DATE,
        ISBN: DataTypes.STRING,
        cover_art_url: DataTypes.STRING,
        synopsis: DataTypes.STRING,
        status: {type: DataTypes.ENUM,
                values: ['to read', 'currently reading', 'previously read']
                }
    });
    return Books;
}