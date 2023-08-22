const { RegistroCancion } = require('../models'); // Asegúrate de importar el modelo correcto
const RegistroCancionController = {};

// Obtener todos los registros de canciones
RegistroCancionController.getRegistrosCanciones = async (req, res) => {
  try {
    const registrosCanciones = await RegistroCancion.findAll();
    res.status(200).json(registrosCanciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener registros de canciones' });
  }
};


// Crear un nuevo registro de canción
RegistroCancionController.createRegistroCancion = async (req, res) => {
  try {
    const { portada, titulo_cancion, nombre_artista, fecha_subida, genero_id, seleccion_audio, descripcion, estado, id_artista } = req.body;
    const nuevoRegistroCancion = await RegistroCancion.create({
      portada,
      titulo_cancion,
      nombre_artista,
      fecha_subida,
      genero_id,
      seleccion_audio,
      descripcion,
      estado,
      id_artista
    });
    res.status(201).json(nuevoRegistroCancion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear registro de canción' });
  }
};

// Obtener un registro de canción por ID
RegistroCancionController.getRegistroCancionById = async (req, res) => {
  try {
    const { id } = req.params;
    const registroCancion = await RegistroCancion.findByPk(id);
    if (registroCancion) {
      res.status(200).json(registroCancion);
    } else {
      res.status(404).json({ message: 'Registro de canción no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener registro de canción' });
  }
};

// Actualizar un registro de canción por ID
RegistroCancionController.updateRegistroCancion = async (req, res) => {
  try {
    const { id } = req.params;
    const { portada, titulo_cancion, nombre_artista, fecha_subida, genero_id, seleccion_audio, descripcion, estado, id_artista } = req.body;
    const registroCancion = await RegistroCancion.findByPk(id);
    if (registroCancion) {
      registroCancion.portada = portada;
      registroCancion.titulo_cancion = titulo_cancion;
      registroCancion.nombre_artista = nombre_artista;
      registroCancion.fecha_subida = fecha_subida;
      registroCancion.genero_id = genero_id;
      registroCancion.seleccion_audio = seleccion_audio;
      registroCancion.descripcion = descripcion;
      registroCancion.estado = estado;
      registroCancion.id_artista = id_artista;
      await registroCancion.save();
      res.status(200).json(registroCancion);
    } else {
      res.status(404).json({ message: 'Registro de canción no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar registro de canción' });
  }
};

// Eliminar un registro de canción por ID
RegistroCancionController.deleteRegistroCancion = async (req, res) => {
  try {
    const { id } = req.params;
    const registroCancion = await RegistroCancion.findByPk(id);
    if (registroCancion) {
      await registroCancion.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Registro de canción no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar registro de canción' });
  }
};

module.exports = RegistroCancionController;

