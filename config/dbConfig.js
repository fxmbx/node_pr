const { Sequelize, DataTypes } = require('sequelize')
const dbConfig = {
    HOST: process.env.HOST || 'localhost',
    USER: process.env.DBUSER || 'root',
    PASSWORD: process.env.DBPASSWORD || '',
    DB: process.env.DBNAME || 'node_sequilizer_db',
    dialet: process.env.DBDIALET || 'mysql',
    pool: {
        max: process.env.MAXPOOL || 5,
        min: process.env.MINPOOL || 0,
        acquire: process.env.DBPOOLACQUIRE || 30000,
        idle: process.env.DBPOOLIDLETIME || 10000,
    },
}

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialet,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    }
)

sequelize.authenticate()
    .then(() => { console.log("db pinged successfully...") })
    .catch(err => {
        console.log("Error : " + err)
    })

sequelize.sync({ force: false }).then(() => {
    console.log("re-sync done")
}).catch(err => {
    console.log("Error: " + err)
})


module.exports = sequelize