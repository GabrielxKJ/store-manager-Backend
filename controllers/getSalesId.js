const service = require('../services/findSalesId');

module.exports = async (req, res, _next) => {    
  const { id } = req.params;
  const salesFound = await service.findSalesId(id);

  return res.status(200).json(salesFound);
};