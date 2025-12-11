const router = require("express").Router();

const { addProduct, getProducts, getProductsById, updateProduct, deleteProduct} = require("../controller/Product")

router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;