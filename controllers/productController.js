const db = require("../models")
const asyncHandler = require('../middleware/asyncHandler.js')
const ErrorResponse = require("../helper/errorResponse")

const Product = db.products
const Review = db.reviews

exports.addProduct = asyncHandler(async (req, res, next) => {
    try {
        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false,
        }

        const product = await Product.create(info)
        res.status(200).json({
            data: product,
            message: 'created succesfully',
            error: null
        })
    } catch (err) {
        return next(new ErrorResponse(`something went wrong adding product: ${err}`, 500))
    }
})

exports.getAllProducts = asyncHandler(async (req, res, next) => {
    let products = await Product.findAll({});
    res.status(200).json({
        data: products,
        message: 'fetched succesfully',
        error: null
    })
})
exports.getPublishedProducts = asyncHandler(async (req, res, next) => {
    let products = await Product.findAll({ where: { published: true } });
    res.status(200).json({
        data: products,
        message: 'fetched succesfully',
        error: null
    })
})
exports.getProductById = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    let product = await Product.findOne({ where: { id } })
    if (!product) {
        return next(new ErrorResponse("no product foound", 404))
    }
    res.status(200).json({
        data: product,
        message: 'feteched succesfully',
        error: null
    })
})
exports.updateProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    let product = await Product.update(req.body, { where: { id: id } })
    if (!product) {
        return next(new ErrorResponse("no product foound", 404))
    }
    res.status(200).json({
        data: product,
        message: 'updated succesfully',
        error: null
    })
})

exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    await Product.destroy({ where: { id: id } })
    res.status(204).json({
        data: null,
        message: 'deleted succesfully',
        error: null
    })
})
