const connection = require('./connection');

module.exports = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id=?';   
  const [result] = await connection.execute(query, [id]);
  return result;
};