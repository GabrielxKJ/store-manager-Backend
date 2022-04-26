const models = require('../models/searchSalesById');

module.exports.findSalesId = async (id) => {
  const foundSalesId = await models.searchSalesById(id);
  return foundSalesId;
};