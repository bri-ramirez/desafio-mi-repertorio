import Song from '../models/Song.js';

export const create = async (song) => {
  const newSong = await Song.create(song);
  return newSong;
};

export const getAll = async () => {
  const songs = await Song.findAll();
  return songs;
};

export const getById = async (id) => {
  const song = await Song.findByPk(id);

  if (!song) {
    throw new Error(`La canción con el ID: ${id} no fue encontrada`);
  }
  return song;
};

export const updateById = async (id, newSong) => {
  await getById(id);

  const updatedSong = await Song.update(newSong, {
    where: { id: id },
  });
  return updatedSong;
};

export const deleteById = async (id) => {
  await getById(id);

  const deletedSong = await Song.destroy({
    where: { id: id },
  });

  return deletedSong;
};

export default { create, getAll, getById, updateById, deleteById };
