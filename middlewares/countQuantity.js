const service = require('../services/AllSales');

module.exports = async (req, res, next) => {
    const [{ quantity }] = req.body;
    const allSales = await service.AllSales();
    console.log(allSales);
    const count = allSales.find((s) => s.quantity < quantity);
    console.log(count);
    if (count) {
      return res.status(422).json({ message: 'Such amount is not permitted to sell' });
    }
    next();
  };
