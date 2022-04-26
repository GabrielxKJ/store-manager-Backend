const modelsInsertSale = require('../models/insertSale');
const modelsSalesProduct = require('../models/sales_product');

module.exports.createSale = async (arr) => {
  const id = await modelsInsertSale.insertSale();
  arr.forEach(async ({
    productId,
    quantity,
  }) => {
    await modelsSalesProduct.salesProduct(id, productId, quantity);
  });

  return {
    id,
    itemsSold: arr,
  };
};
