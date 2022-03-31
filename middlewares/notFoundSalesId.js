const findSalesId = require('../services/findSalesId');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const salesId = await findSalesId(id);
    if (!salesId.length) {
        return res.status(404).json({ message: 'Sale not found' });
    }
    next();
};