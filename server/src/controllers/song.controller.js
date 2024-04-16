import { errorMessage } from '../helpers/message.js';
import { validateSong } from '../helpers/validate.js';

import SongService from '../services/song.service.js';

export const create = async (req, res) => {
  try {
    validateSong(req);

    const song = await SongService.create({
      titulo: req.body.titulo,
      artista: req.body.artista,
      tono: req.body.tono,
    });

    return res.status(201).json(song);
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const songs = await SongService.getAll();
    return res.status(200).json(songs);
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  if (!req.params.id) {
    errorMessage("El campo 'id' es requerido");
    return res.status(400).json({ message: "El campo 'id' es requerido" });
  }

  try {
    const id = req.params.id;
    const song = await SongService.getById(id);
    return res.status(200).json(song);
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const updateById = async (req, res) => {

  console.log('UODATE');

  try {
    validateSong(req);

    const id = req.params.id;
    await SongService.updateById(id, {
      titulo: req.body.titulo,
      artista: req.body.artista,
      tono: req.body.tono,
    });

    return res.status(200).json({
      id,
      ...req.body,
    });
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteById = async (req, res) => {
  try {
    await SongService.deleteById(req.params.id);
    return res.status(200).json({ message: 'Canción eliminada!' });
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};
