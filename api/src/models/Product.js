const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        // allowNull: false,
      }
    },
    
  );
};