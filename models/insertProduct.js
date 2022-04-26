const connection = require('./connection');

module.exports.insertProduct = async (name, quantity) => {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
    const [product] = await connection.execute(query, [name, quantity]);

    return {
        id: product.insertId,
        name,
        quantity,
    };
};