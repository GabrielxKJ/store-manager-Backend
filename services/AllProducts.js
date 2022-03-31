const SearchAllProducts = require('../models/searchAllProducts');

module.exports = async () => {
const allProducts = await SearchAllProducts();
return allProducts;
};