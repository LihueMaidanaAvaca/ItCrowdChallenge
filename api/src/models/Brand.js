const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Brand', {
        name: {
            type: DataTypes.STRING, 
            unique: true,
            allowNull: false
            
        },
            });
};