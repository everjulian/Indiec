const { ArtistaPerfil } = require('../models'); // Asegúrate de importar el modelo correcto
const ArtistaPerfilController = {};

// Obtener todos los perfiles de artistas
ArtistaPerfilController.getPerfilesArtistas = async (req, res) => {
  try {
    const perfilesArtistas = await ArtistaPerfil.findAll();
    res.status(200).json(perfilesArtistas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener perfiles de artistas' });
  }
};

// Crear un nuevo perfil de artista
ArtistaPerfilController.createPerfilArtista = async (req, res) => {
  try {
    const { id_artista, id_perfil } = req.body;
    const nuevoPerfilArtista = await ArtistaPerfil.create({
      id_artista,
      id_perfil
    });
    res.status(201).json(nuevoPerfilArtista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear perfil de artista' });
  }
};

// Obtener un perfil de artista por IDs
ArtistaPerfilController.getPerfilArtistaByIds = async (req, res) => {
  try {
    const { id_artista, id_perfil } = req.params;
    const perfilArtista = await ArtistaPerfil.findOne({
      where: { id_artista, id_perfil }
    });
    if (perfilArtista) {
      res.status(200).json(perfilArtista);
    } else {
      res.status(404).json({ message: 'Perfil de artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener perfil de artista' });
  }
};

// Eliminar un perfil de artista por IDs
ArtistaPerfilController.deletePerfilArtista = async (req, res) => {
  try {
    const { id_artista, id_perfil } = req.params;
    const perfilArtista = await ArtistaPerfil.findOne({
      where: { id_artista, id_perfil }
    });
    if (perfilArtista) {
      await perfilArtista.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Perfil de artista no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar perfil de artista' });
  }
};

module.exports = ArtistaPerfilController;
