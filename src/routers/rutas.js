const express = require('express');
const router = express.Router();

// const UsuarioController = require('../controllers/usuario.controller');
const RegistroArtistaController = require('../controllers/RegistroArtistaController');
const LoginArtistaController = require('../controllers/LoginArtistaController');
const GeneroController = require('../controllers/GeneroController');
const EstadoAprobacionController = require('../controllers/EstadoAprobacionController');
const RegistroCancionController = require('../controllers/RegistroCancionController');
const ArtistaPerfilController = require('../controllers/ArtistaPerfilController');
// const CancionEstadoAprobacionController = require('../controllers/cancionEstadoAprobacion.controller');

// Rutas para UsuarioController
router.get('/usuarios', UsuarioController.getListUsers);
router.post('/usuarios', UsuarioController.postUsers);
router.get('/usuarios/:id', UsuarioController.getUser);
router.put('/usuarios/:id', UsuarioController.updateUser);
router.delete('/usuarios/:id', UsuarioController.deleteUser);

// Rutas para RegistroArtistaController
router.get('/registro-artistas', RegistroArtistaController.getRegistrosArtistas);
router.post('/registro-artistas', RegistroArtistaController.createRegistroArtista);
router.get('/registro-artistas/:id', RegistroArtistaController.getRegistroArtistaById);
router.put('/registro-artistas/:id', RegistroArtistaController.updateRegistroArtista);
router.delete('/registro-artistas/:id', RegistroArtistaController.deleteRegistroArtista);

// Rutas para LoginArtistaController
router.get('/login-artistas', LoginArtistaController.getLoginsArtistas);
router.post('/login-artistas', LoginArtistaController.createLoginArtista);
router.get('/login-artistas/:id', LoginArtistaController.getLoginArtistaById);
router.put('/login-artistas/:id', LoginArtistaController.updateLoginArtista);
router.delete('/login-artistas/:id', LoginArtistaController.deleteLoginArtista);

// Rutas para GeneroController
router.get('/generos', GeneroController.getGeneros);
router.post('/generos', GeneroController.createGenero);
router.get('/generos/:id', GeneroController.getGeneroById);
router.put('/generos/:id', GeneroController.updateGenero);
router.delete('/generos/:id', GeneroController.deleteGenero);

// Rutas para EstadoAprobacionController
router.get('/estados-aprobacion', EstadoAprobacionController.getEstadosAprobacion);
router.post('/estados-aprobacion', EstadoAprobacionController.createEstadoAprobacion);
router.get('/estados-aprobacion/:id', EstadoAprobacionController.getEstadoAprobacionById);
router.put('/estados-aprobacion/:id', EstadoAprobacionController.updateEstadoAprobacion);
router.delete('/estados-aprobacion/:id', EstadoAprobacionController.deleteEstadoAprobacion);

// Rutas para RegistroCancionController
router.get('/registros-canciones', RegistroCancionController.getRegistrosCanciones);
router.post('/registros-canciones', RegistroCancionController.createRegistroCancion);
router.get('/registros-canciones/:id', RegistroCancionController.getRegistroCancionById);
router.put('/registros-canciones/:id', RegistroCancionController.updateRegistroCancion);
router.delete('/registros-canciones/:id', RegistroCancionController.deleteRegistroCancion);

// Rutas para ArtistaPerfilController
router.get('/artistas-perfil', ArtistaPerfilController.getPerfilesArtistas);
router.post('/artistas-perfil', ArtistaPerfilController.createPerfilArtista);
router.get('/artistas-perfil/:id_artista/:id_perfil', ArtistaPerfilController.getPerfilArtistaByIds);
router.delete('/artistas-perfil/:id_artista/:id_perfil', ArtistaPerfilController.deletePerfilArtista);

// Rutas para CancionEstadoAprobacionController
router.get('/canciones-estados-aprobacion', CancionEstadoAprobacionController.getEstadosAprobacionCanciones);
router.post('/canciones-estados-aprobacion', CancionEstadoAprobacionController.createEstadoAprobacionCancion);
router.get('/canciones-estados-aprobacion/:id_can_estado_apro', CancionEstadoAprobacionController.getEstadoAprobacionCancionByIds);
router.delete('/canciones-estados-aprobacion/:id_can_estado_apro', CancionEstadoAprobacionController.deleteEstadoAprobacionCancion);

module.exports = router;
