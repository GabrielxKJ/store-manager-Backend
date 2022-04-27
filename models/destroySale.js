const connection = require('./connection');

module.exports.destroyProducts = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id=?';   
  const [result] = await connection.execute(query, [id]);
  return result;
};