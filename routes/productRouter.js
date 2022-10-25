const {
    getAllProducts,
    getProductById,
    getPublishedProducts,
    updateProduct,
    addProduct,
    deleteProduct
} = require("../controllers/productController")


const router = require('express').Router()

router.post("/addProduct", addProduct)

router.get("/get-all-products", getAllProducts)
router.get("/get-published-products", getPublishedProducts)

router.put("/update-product", updateProduct)

router.get("/get-product/:id", getProductById)
router.delete("delete-product/:id", deleteProduct)


module.exports = router