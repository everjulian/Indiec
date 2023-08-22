const LoginArtista = (sequelize, DataTypes) => {
    return sequelize.define('login_artista', {
        id_login: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        email_artista: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        timestamps: false,
    });
}

module.exports = LoginArtista;
