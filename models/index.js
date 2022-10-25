const sequelize = require("../config/dbConfig.js")

const db = {}

db.Sequelize = sequelize.Sequelize
db.products = require('./productModel.js')
db.reviews = require('./reviewModel.js')

module.exports = db