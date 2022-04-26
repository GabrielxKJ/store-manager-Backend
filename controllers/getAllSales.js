const service = require('../services/AllSales');

module.exports = async (_req, res) => {
  const allSales = await service.AllSales();
  return res.status(200).json(allSales); 
};
