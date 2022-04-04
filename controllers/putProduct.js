const changeProduct = require('../services/changeProduct');

module.exports = async (req, res, _next) => {
  console.log('cheguei');
  const { name, quantity } = req.body;
  const { id } = req.params;
  const putProduct = await changeProduct(id, name, quantity);
  console.log(putProduct);
  return res.status(200).json(putProduct);
};