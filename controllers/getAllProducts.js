const service = require('../services/AllProducts');

module.exports = async (_req, res) => {
  const allProducts = await service.AllProducts();
  return res.status(200).json(allProducts); 
};
