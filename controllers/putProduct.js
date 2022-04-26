const service = require('../services/changeProduct');

module.exports = async (req, res, _next) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const putProduct = await service.changeProduct(id, name, quantity);
  return res.status(200).json(putProduct);
};