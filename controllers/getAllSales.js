const AllSales = require('../services/AllSales');

module.exports = async (_req, res) => {
  const allSales = await AllSales();
  return res.status(200).json(allSales); 
};
