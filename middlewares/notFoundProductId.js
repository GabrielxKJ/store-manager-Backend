const service = require('../services/findProductById');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const productId = await service.findProductsById(id);
    if (!productId) {
        return res.status(404).json({ message: 'Product not found' });
    }
    next();
};