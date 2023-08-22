const { Genero } = require('../models'); // Asegúrate de importar el modelo correcto
const GeneroController = {};

// Obtener todos los géneros musicales
GeneroController.getGeneros = async (req, res) => {
  try {
    const generos = await Genero.findAll();
    res.status(200).json(generos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener géneros musicales' });
  }
};

// Crear un nuevo género musical
GeneroController.createGenero = async (req, res) => {
  try {
    const { nombre_genero } = req.body;
    const nuevoGenero = await Genero.create({
      nombre_genero
    });
    res.status(201).json(nuevoGenero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear género musical' });
  }
};

// Obtener un género musical por ID
GeneroController.getGeneroById = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByPk(id);
    if (genero) {
      res.status(200).json(genero);
    } else {
      res.status(404).json({ message: 'Género musical no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener género musical' });
  }
};

// Actualizar un género musical por ID
GeneroController.updateGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_genero } = req.body;
    const genero = await Genero.findByPk(id);
    if (genero) {
      genero.nombre_genero = nombre_genero;
      await genero.save();
      res.status(200).json(genero);
    } else {
      res.status(404).json({ message: 'Género musical no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar género musical' });
  }
};

// Eliminar un género musical por ID
GeneroController.deleteGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByPk(id);
    if (genero) {
      await genero.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Género musical no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar género musical' });
  }
};

module.exports = GeneroController;
