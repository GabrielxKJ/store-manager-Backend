const connection = require('./connection');

module.exports = async (id) => {
    const [sale] = await connection
      .execute(`
      SELECT 
          sales.date,
          product.product_id AS productId,
          product.quantity
      FROM
          sales
              INNER JOIN
          sales_products AS product ON sales.id = product.sale_id
      WHERE
          sales.id = ?;
      `, [id]);
  
      return sale;
  };