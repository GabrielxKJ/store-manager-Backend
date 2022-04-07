const SearchAllSales = require('../models/searchAllSales');

module.exports = async () => {
  const allSales = await SearchAllSales();
  return allSales;
};