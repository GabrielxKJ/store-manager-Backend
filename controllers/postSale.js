const service = require('../services/createSale');

module.exports = async (req, res) => {
  const arrayBody = req.body;
  const created = await service.createSale(arrayBody);
  return res.status(201).json(created);
};