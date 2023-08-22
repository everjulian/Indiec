const Perfil = (sequelize, DataTypes) => {
    return sequelize.define('perfil', {
        id_perfil: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: DataTypes.STRING,
        follow: DataTypes.INTEGER,
        publicaciones: DataTypes.INTEGER,
    }, {
        timestamps: false,
    });
}

module.exports = Perfil;
