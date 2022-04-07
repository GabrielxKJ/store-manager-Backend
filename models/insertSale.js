const connection = require('./connection');

module.exports = async () => {
  console.log('insert');
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';    
  const [result] = await connection.execute(query);
  return result.insertId;
};