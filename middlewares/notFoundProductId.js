const findProductId = require('../services/findProductById');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const productId = await findProductId(id);
    if (!productId) {
        return res.status(404).json({ message: 'Product not found' });
    }
    next();
};