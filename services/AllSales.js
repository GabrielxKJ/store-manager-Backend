const SearchAllSales = require('../models/SearchAllSales');

module.exports = async () => {
const allSales = await SearchAllSales();
return allSales;
};