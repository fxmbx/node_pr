const path = require('path')
const express = require("express")
require("dotenv").config({ path: path.resolve(__dirname, "./config/config.env") })


const cors = require("cors")
const errorHandler = require("./middleware/error")
const indexRouter = require("./routes")


const PORT = process.env.PORT

const app = express()

let corsOptions = {
    origin: 'https://localhost:8081'
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(errorHandler)

app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', indexRouter)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

