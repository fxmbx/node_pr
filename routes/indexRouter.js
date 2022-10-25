const router = require('express').Router()
const productRouter = require('./productRouter')
const reviewRouter = require('./reviewRouter')

const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs.htm'))
})
router.use('/product', productRouter)
router.use('/review', reviewRouter)

module.exports = router