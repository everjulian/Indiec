const RegistroArtista = (sequelize, DataTypes) => {
    return sequelize.define('registro_artista', {
        id_artista: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        fecha_nacimiento: DataTypes.DATE,
    }, {
        timestamps: false,
    });
}

module.exports = RegistroArtista;
