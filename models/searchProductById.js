const connection = require('./connection');

module.exports.searchProductById = async (id) => {
  const [productsDataById] = await connection.execute(
  'SELECT id, name, quantity FROM StoreManager.products WHERE id=?', [id],
  );
    return productsDataById[0];
};