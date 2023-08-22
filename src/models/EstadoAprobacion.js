const EstadoAprobacion = (sequelize, DataTypes) => {
    return sequelize.define('estado_aprobacion', {
        id_estado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        estado: DataTypes.STRING,
    }, {
        timestamps: false,
    });
}

module.exports = EstadoAprobacion;
