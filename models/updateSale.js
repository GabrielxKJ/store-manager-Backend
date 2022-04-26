const connection = require('./connection');

module.exports.updateSale = async (productId, quantity, saleId) => {
 const query = 'UPDATE StoreManager.sales_products SET product_id=?, quantity=? WHERE sale_id=?';
 await connection.execute(query, [productId, quantity, saleId]);
};