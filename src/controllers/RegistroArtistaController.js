const { RegistroArtista } = require('../models'); // Asegúrate de importar el modelo correcto
const RegistroArtistaController = {};

// Obtener todos los artistas registrados
RegistroArtistaController.getArtistas = async (req, res) => {
  try {
    const artistas = await RegistroArtista.findAll();
    res.status(200).json(artistas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener artistas registrados' });
  }
};

// Crear un nuevo artista
RegistroArtistaController.createArtista = async (req, res) => {
  try {
    const { nombre, email, password, fecha_nacimiento } = req.body;
    const nuevoArtista = await RegistroArtista.create({
      nombre,
      email,
      password,
      fecha_nacimiento
    });
    res.status(201).json(nuevoArtista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear artista' });
  }
};

// Obtener un artista por ID
RegistroArtistaController.getArtistaById = async (req, res) => {
  try {
    const { id } = req.params;
    const artista = await RegistroArtista.findByPk(id);
    if (artista) {
      res.status(200).json(artista);
    } else {
      res.status(404).json({ message: 'Artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener artista' });
  }
};

// Actualizar un artista por ID
RegistroArtistaController.updateArtista = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, password, fecha_nacimiento } = req.body;
    const artista = await RegistroArtista.findByPk(id);
    if (artista) {
      artista.nombre = nombre;
      artista.email = email;
      artista.password = password;
      artista.fecha_nacimiento = fecha_nacimiento;
      await artista.save();
      res.status(200).json(artista);
    } else {
      res.status(404).json({ message: 'Artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar artista' });
  }
};

// Eliminar un artista por ID
RegistroArtistaController.deleteArtista = async (req, res) => {
  try {
    const { id } = req.params;
    const artista = await RegistroArtista.findByPk(id);
    if (artista) {
      await artista.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar artista' });
  }
};

module.exports = RegistroArtistaController;
