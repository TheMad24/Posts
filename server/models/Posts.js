const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) =>{

    const Posts = sequelize.define("Posts",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull : false,
        }
    })

    return Posts;
}