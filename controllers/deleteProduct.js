const excludeProduct = require('../services/excludeProduct');

module.exports = async (req, res) => {
const { id } = req.params;
const deleted = await excludeProduct(id);
return res.status(204).json(deleted);
};