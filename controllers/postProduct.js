const createProduct = require('../services/createProduct');

module.exports = async (req, res, _next) => {
    const { name, quantity } = req.body;
    const newProduct = await createProduct(name, quantity);
    return res.status(201).json(newProduct);
};