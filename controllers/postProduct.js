const createProduct = require('../services/createProduct');

module.exports = async (req, res, _next) => {
    console.log('cheguei');
    const { name, quantity } = req.body;
    const newProduct = await createProduct(name, quantity);
    console.log(newProduct);
    return res.status(201).json(newProduct);
};