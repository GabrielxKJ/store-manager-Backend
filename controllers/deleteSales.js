const service = require('../services/excludeSale');

module.exports = async (req, res) => {
  const { id } = req.params;
  const deleted = await service.excludeProduct(id);
  return res.status(204).json(deleted);
};