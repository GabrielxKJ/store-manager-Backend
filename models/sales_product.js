const connection = require('./connection');

module.exports = async (saleId, productId, quantity) => {
const query = `
INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)`;
await connection.execute(query, [saleId, productId, quantity]);

// return salesProduct;
};