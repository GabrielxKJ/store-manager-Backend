const getAllProducts = require('../services/AllProducts');

module.exports = async (_req, res) => {
  const allProducts = await getAllProducts();
  return res.status(200).json(allProducts); 
};
