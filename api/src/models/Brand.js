const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Brand', {
        name: {
            type: DataTypes.STRING, 
            unique: true,
            allowNull: false
        },
        logo_url: {
            type: DataTypes.STRING,
            unique: true
            // allowNull: false,
          },

            });
};