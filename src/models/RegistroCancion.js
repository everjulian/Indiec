const RegistroCancion = (sequelize, DataTypes) => {
    return sequelize.define('registro_cancion', {
        id_registro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        portada: DataTypes.BLOB,
        titulo_cancion: DataTypes.STRING,
        nombre_artista: DataTypes.STRING,
        fecha_subida: DataTypes.DATE,
        genero_id: DataTypes.INTEGER,
        seleccion_audio: DataTypes.INTEGER,
        descripcion: DataTypes.STRING,
        estado: DataTypes.INTEGER,
        id_artista: DataTypes.INTEGER,
    }, {
        timestamps: false,
    });
}

module.exports = RegistroCancion;
