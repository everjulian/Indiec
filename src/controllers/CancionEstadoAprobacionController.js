const { CancionEstadoAprobacion } = require('../models'); // Asegúrate de importar el modelo correcto
const CancionEstadoAprobacionController = {};

// Obtener todos los estados de aprobación de canciones
CancionEstadoAprobacionController.getEstadosAprobacionCanciones = async (req, res) => {
  try {
    const estadosAprobacionCanciones = await CancionEstadoAprobacion.findAll();
    res.status(200).json(estadosAprobacionCanciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener estados de aprobación de canciones' });
  }
};

// Crear un nuevo estado de aprobación de canción
CancionEstadoAprobacionController.createEstadoAprobacionCancion = async (req, res) => {
  try {
    const { id_cancion, id_estado } = req.body;
    const nuevoEstadoAprobacionCancion = await CancionEstadoAprobacion.create({
      id_cancion,
      id_estado
    });
    res.status(201).json(nuevoEstadoAprobacionCancion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear estado de aprobación de canción' });
  }
};

// Obtener un estado de aprobación de canción por IDs
CancionEstadoAprobacionController.getEstadoAprobacionCancionByIds = async (req, res) => {
  try {
    const { id_can_estado_apro } = req.params;
    const estadoAprobacionCancion = await CancionEstadoAprobacion.findByPk(id_can_estado_apro);
    if (estadoAprobacionCancion) {
      res.status(200).json(estadoAprobacionCancion);
    } else {
      res.status(404).json({ message: 'Estado de aprobación de canción no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener estado de aprobación de canción' });
  }
};

// Eliminar un estado de aprobación de canción por IDs
CancionEstadoAprobacionController.deleteEstadoAprobacionCancion = async (req, res) => {
  try {
    const { id_can_estado_apro } = req.params;
    const estadoAprobacionCancion = await CancionEstadoAprobacion.findByPk(id_can_estado_apro);
    if (estadoAprobacionCancion) {
      await estadoAprobacionCancion.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Estado de aprobación de canción no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar estado de aprobación de canción' });
  }
};

module.exports = CancionEstadoAprobacionController;
