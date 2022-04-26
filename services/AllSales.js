const models = require('../models/searchAllSales');

module.exports.AllSales = async () => {
  const allSales = await models.searchAllSales();
  return allSales;
};