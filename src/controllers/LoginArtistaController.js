const { LoginArtista } = require('../models'); // Asegúrate de importar el modelo correcto
const LoginArtistaController = {};

// Obtener todos los logins de artistas
LoginArtistaController.getLoginsArtistas = async (req, res) => {
  try {
    const loginsArtistas = await LoginArtista.findAll();
    res.status(200).json(loginsArtistas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener logins de artistas' });
  }
};

// Crear un nuevo login de artista
LoginArtistaController.createLoginArtista = async (req, res) => {
  try {
    const { email_artista, password } = req.body;
    const nuevoLoginArtista = await LoginArtista.create({
      email_artista,
      password
    });
    res.status(201).json(nuevoLoginArtista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear login de artista' });
  }
};

// Obtener un login de artista por ID
LoginArtistaController.getLoginArtistaById = async (req, res) => {
  try {
    const { id } = req.params;
    const loginArtista = await LoginArtista.findByPk(id);
    if (loginArtista) {
      res.status(200).json(loginArtista);
    } else {
      res.status(404).json({ message: 'Login de artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener login de artista' });
  }
};

// Actualizar un login de artista por ID
LoginArtistaController.updateLoginArtista = async (req, res) => {
  try {
    const { id } = req.params;
    const { email_artista, password } = req.body;
    const loginArtista = await LoginArtista.findByPk(id);
    if (loginArtista) {
      loginArtista.email_artista = email_artista;
      loginArtista.password = password;
      await loginArtista.save();
      res.status(200).json(loginArtista);
    } else {
      res.status(404).json({ message: 'Login de artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar login de artista' });
  }
};

// Eliminar un login de artista por ID
LoginArtistaController.deleteLoginArtista = async (req, res) => {
  try {
    const { id } = req.params;
    const loginArtista = await LoginArtista.findByPk(id);
    if (loginArtista) {
      await loginArtista.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Login de artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar login de artista' });
  }
};

module.exports = LoginArtistaController;
