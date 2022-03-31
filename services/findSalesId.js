const findSalesById = require('../models/searchSalesId');

module.exports = async (id) => {
    const foundSalesId = await findSalesById(id);
    return foundSalesId;
    };