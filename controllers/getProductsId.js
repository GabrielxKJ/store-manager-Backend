// const findProductId = require('../services/findProductId');
const findProductById = require('../services/findProductById');

module.exports = async (req, res, _next) => {    
  const { id } = req.params;
  const productFound = await findProductById(id);

  return res.status(200).json(productFound);
};