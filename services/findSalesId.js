const findSalesById = require('../models/searchSalesById');

module.exports = async (id) => {
    const foundSalesId = await findSalesById(id);
    return foundSalesId;
    };