const connection = require('./connection');

module.exports.searchAllSales = async () => {
    const [sales] = await connection
    .execute(`
    SELECT 
        sales.id AS saleId,
        sales.date,
        product.product_id AS productId,
        product.quantity
    FROM
        sales
    INNER JOIN
        sales_products AS product ON sales.id = product.sale_id;
    `);
  return sales;
};