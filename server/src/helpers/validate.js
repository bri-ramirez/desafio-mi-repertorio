export const validateSong = (req) => {
  if (!req.body.titulo) {
    throw new Error("EL campo 'titulo' es requerido");
  }

  if (!req.body.artista) {
    throw new Error("EL campo 'artista' es requerido");
  }

  if (!req.body.tono) {
    throw new Error("EL campo 'tono' es requerido");
  }
};
