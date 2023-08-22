const { Perfil } = require('../models'); // Asegúrate de importar el modelo correcto
const PerfilController = {};

// Obtener todos los perfiles
PerfilController.getPerfiles = async (req, res) => {
  try {
    const perfiles = await Perfil.findAll();
    res.status(200).json(perfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener perfiles' });
  }
};

// Crear un nuevo perfil
PerfilController.createPerfil = async (req, res) => {
  try {
    const { nombre, follow, publicaciones } = req.body;
    const nuevoPerfil = await Perfil.create({
      nombre,
      follow,
      publicaciones
    });
    res.status(201).json(nuevoPerfil);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear perfil' });
  }
};

// Obtener un perfil por ID
PerfilController.getPerfilById = async (req, res) => {
  try {
    const { id } = req.params;
    const perfil = await Perfil.findByPk(id);
    if (perfil) {
      res.status(200).json(perfil);
    } else {
      res.status(404).json({ message: 'Perfil no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

// Actualizar un perfil por ID
PerfilController.updatePerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, follow, publicaciones } = req.body;
    const perfil = await Perfil.findByPk(id);
    if (perfil) {
      perfil.nombre = nombre;
      perfil.follow = follow;
      perfil.publicaciones = publicaciones;
      await perfil.save();
      res.status(200).json(perfil);
    } else {
      res.status(404).json({ message: 'Perfil no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar perfil' });
  }
};

// Eliminar un perfil por ID
PerfilController.deletePerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const perfil = await Perfil.findByPk(id);
    if (perfil) {
      await perfil.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Perfil no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar perfil' });
  }
};

module.exports = PerfilController;
