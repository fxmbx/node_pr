const { DataTypes } = require("sequelize")
const sequelize = require("../config/dbConfig.js")

const productModel = sequelize.define('product', {
    images: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0
    },
    description: {
        type: DataTypes.TEXT,
    },
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

console.log("product model: ", productModel === sequelize.models.productModel)
module.exports = productModel