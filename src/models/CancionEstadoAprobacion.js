const CancionEstadoAprobacion = (sequelize, DataTypes) => {
    return sequelize.define('cancion_estado_aprobacion', {
        id_can_estado_apro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_cancion: DataTypes.INTEGER,
        id_estado: DataTypes.INTEGER,
    }, {
        timestamps: false,
    });
}

module.exports = CancionEstadoAprobacion;
