const connection = require('./connection');

module.exports.updateProducts = async (id, name, quantity) => {
    const query = 'UPDATE StoreManager.products SET name=?, quantity=? WHERE id=?';
    await connection.execute(query, [id, name, quantity]);
    return {
        id,
        name,
        quantity,
    };
};