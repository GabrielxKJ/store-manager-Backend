const connection = require('./connection');

module.exports = async (id) => {
    const [sale] = await connection
      .execute(`
      SELECT 
          sales.date,
          product.product_id AS productId,
          product.quantity
      FROM
        StoreManager.sales
      INNER JOIN
          StoreManager.sales_products AS product ON StoreManager.sales.id = product.sale_id
      WHERE
          sales.id = ?;
      `, [id]);
  
      return sale;
  };