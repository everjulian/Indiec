const { EstadoAprobacion } = require('../models'); // Asegúrate de importar el modelo correcto
const EstadoAprobacionController = {};

// Obtener todos los estados de aprobación
EstadoAprobacionController.getEstadosAprobacion = async (req, res) => {
  try {
    const estadosAprobacion = await EstadoAprobacion.findAll();
    res.status(200).json(estadosAprobacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener estados de aprobación' });
  }
};

// Crear un nuevo estado de aprobación
EstadoAprobacionController.createEstadoAprobacion = async (req, res) => {
  try {
    const { estado } = req.body;
    const nuevoEstadoAprobacion = await EstadoAprobacion.create({
      estado
    });
    res.status(201).json(nuevoEstadoAprobacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear estado de aprobación' });
  }
};

// Obtener un estado de aprobación por ID
EstadoAprobacionController.getEstadoAprobacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const estadoAprobacion = await EstadoAprobacion.findByPk(id);
    if (estadoAprobacion) {
      res.status(200).json(estadoAprobacion);
    } else {
      res.status(404).json({ message: 'Estado de aprobación no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener estado de aprobación' });
  }
};

// Actualizar un estado de aprobación por ID
EstadoAprobacionController.updateEstadoAprobacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    const estadoAprobacion = await EstadoAprobacion.findByPk(id);
    if (estadoAprobacion) {
      estadoAprobacion.estado = estado;
      await estadoAprobacion.save();
      res.status(200).json(estadoAprobacion);
    } else {
      res.status(404).json({ message: 'Estado de aprobación no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar estado de aprobación' });
  }
};

// Eliminar un estado de aprobación por ID
EstadoAprobacionController.deleteEstadoAprobacion = async (req, res) => {
  try {
    const { id } = req.params;
    const estadoAprobacion = await EstadoAprobacion.findByPk(id);
    if (estadoAprobacion) {
      await estadoAprobacion.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Estado de aprobación no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar estado de aprobación' });
  }
};

module.exports = EstadoAprobacionController;
