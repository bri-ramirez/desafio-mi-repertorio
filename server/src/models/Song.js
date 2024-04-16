import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configs/db.js";

// sequelize.sync({ force: true });

class Song extends Model {}

Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artista: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Song", tableName: "canciones", timestamps: false }
);

export default Song;