const { DataTypes } = require("sequelize")
const sequelize = require("../config/dbConfig.js")

const reviewModel = sequelize.define('review', {
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT,
    }
})

console.log("review model: ", reviewModel === sequelize.models.reviewModel)
module.exports = reviewModel