const createSale = require('../services/createSale');

module.exports = async (req, res) => {
console.log('CHEGUEI');
const arrayBody = req.body;
const created = await createSale(arrayBody);
return res.status(201).json(created);
};