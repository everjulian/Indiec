const Genero = (sequelize, DataTypes) => {
    return sequelize.define('genero', {
        id_genero: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre_genero: DataTypes.STRING,
    }, {
        timestamps: false,
    });
}

module.exports = Genero;
