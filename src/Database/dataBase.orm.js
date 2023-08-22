const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

//const sequelize = new Sequelize(MYSQL_URI);

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

const perfilModel = require('../models/Perfil');
const registroArtistaModel = require('../models//RegistroArtista');
const loginArtistaModel = require('../models/LoginArtista');
const generoModel = require('../models/Genero');
const estadoAprobacionModel = require('../models/EstadoAprobacion');
const registroCancionModel = require('../models/RegistroCancion');
const artistaPerfilModel = require('../models/ArtistaPerfil');
const cancionEstadoAprobacionModel = require('../models/CancionEstadoAprobacion');



//sincronia
const Perfil = perfilModel(sequelize, Sequelize);
const RegistroArtista = registroArtistaModel(sequelize, Sequelize);
const LoginArtista = loginArtistaModel(sequelize, Sequelize);
const Genero = generoModel(sequelize, Sequelize);
const EstadoAprobacion = estadoAprobacionModel(sequelize, Sequelize);
const RegistroCancion = registroCancionModel(sequelize, Sequelize);
const ArtistaPerfil = artistaPerfilModel(sequelize, Sequelize);
const CancionEstadoAprobacion = cancionEstadoAprobacionModel(sequelize, Sequelize);

// Relaciones

RegistroArtista.hasOne(LoginArtista);
LoginArtista.belongsTo(RegistroArtista);

RegistroArtista.hasMany(RegistroCancion, { foreignKey: 'id_artista' });
RegistroCancion.belongsTo(RegistroArtista, { foreignKey: 'id_artista' });

RegistroArtista.belongsToMany(Perfil, { through: ArtistaPerfil });
Perfil.belongsToMany(RegistroArtista, { through: ArtistaPerfil });

RegistroCancion.belongsTo(Genero, { foreignKey: 'genero_id' });
Genero.hasMany(RegistroCancion, { foreignKey: 'genero_id' });

RegistroCancion.belongsTo(EstadoAprobacion, { foreignKey: 'estado' });
EstadoAprobacion.hasMany(RegistroCancion, { foreignKey: 'estado' });

CancionEstadoAprobacion.belongsTo(RegistroCancion, { foreignKey: 'id_cancion' });
RegistroCancion.hasMany(CancionEstadoAprobacion, { foreignKey: 'id_cancion' });

CancionEstadoAprobacion.belongsTo(EstadoAprobacion, { foreignKey: 'id_estado' });
EstadoAprobacion.hasMany(CancionEstadoAprobacion, { foreignKey: 'id_estado' });



module.exports = {
	Perfil,
	RegistroArtista,
	LoginArtista,
	Genero,
	EstadoAprobacion,
	RegistroCancion,
	ArtistaPerfil,
	CancionEstadoAprobacion

};