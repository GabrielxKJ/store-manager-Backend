const service = require('../services/createProduct');

module.exports = async (req, res, _next) => {
    const { name, quantity } = req.body;
    const newProduct = await service.createProduct(name, quantity);
    console.log(newProduct);
    return res.status(201).json(newProduct);
};