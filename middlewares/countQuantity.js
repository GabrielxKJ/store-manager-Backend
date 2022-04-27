const service = require('../services/findProductById');

module.exports = async (req, res, next) => {
    const [{ productId, quantity }] = req.body;
    const sale = await service.findProductsById(productId);
    // const count = allSales.some((s) => s.quantity < quantity);
    // console.log(count, 'find');
    if (sale < quantity) {
      return res.status(422).json({ message: 'Such amount is not permitted to sell' });
    }
    next();
  };
