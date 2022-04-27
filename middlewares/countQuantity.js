const service = require('../services/AllSales');

module.exports = async (req, res, next) => {
    const [{ quantity }] = req.body;
    const allSales = await service.AllSales();
    const count = allSales.some((s) => s.quantity < quantity);
    console.log(count, 'find');
    if (count) {
      return res.status(422).json({ message: 'Such amount is not permitted to sell' });
    }
    next();
  };
