// const findProductId = require('../services/findProductId');
const service = require('../services/findProductById');

module.exports = async (req, res, _next) => {    
  const { id } = req.params;
  const productFound = await service.findProductsById(id);

  return res.status(200).json(productFound);
};