module.exports = function(sequelize, DataTypes) {
    var Books = sequelize.define("Books", {
        user: DataTypes.STRING,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        copyright_date: DataTypes.DATE,
        ISBN: DataTypes.STRING,
        cover_art_url: DataTypes.STRING,
        synopsis: DataTypes.STRING,
        status: DataTypes.STRING
    });
    return Books;
}