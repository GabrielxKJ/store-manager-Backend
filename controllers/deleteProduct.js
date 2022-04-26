const service = require('../services/excludeProduct');

module.exports = async (req, res) => {
const { id } = req.params;
const deleted = await service.excludeProduct(id);
return res.status(204).json(deleted);
};