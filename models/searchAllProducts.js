const connection = require('./connection');

module.exports = async () => {
    const [result] = await connection.execute('SELECT * FROM StoreManager.products');
    return result;
};