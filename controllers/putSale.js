const changeSale = require('../services/changeSale');

module.exports = async (req, res) => {
const { id } = req.params;
const [{ productId, quantity }] = req.body;

const updatedSale = await changeSale(productId, quantity, id);
return res.status(200).json(updatedSale);
};