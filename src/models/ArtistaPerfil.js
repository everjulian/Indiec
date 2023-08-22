const ArtistaPerfil = (sequelize, DataTypes) => {
    return sequelize.define('artista_perfil', {
        id_artista: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_perfil: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    }, {
        timestamps: false,
    });
}

module.exports = ArtistaPerfil;
