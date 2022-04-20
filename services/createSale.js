const insertSale = require('../models/insertSale');
const salesProduct = require('../models/sales_product');

module.exports = async (arr) => {
  const id = await insertSale();
  arr.forEach(async ({
    productId,
    quantity,
  }) => {
    await salesProduct(id, productId, quantity);
  });

  return {
    id,
    itemsSold: arr,
  };
};
