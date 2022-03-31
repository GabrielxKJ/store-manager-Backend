const findSalesId = require('../services/findSalesId');

module.exports = async (req, res, _next) => {    
  const { id } = req.params;
  const salesFound = await findSalesId(id);

  return res.status(200).json(salesFound);
};