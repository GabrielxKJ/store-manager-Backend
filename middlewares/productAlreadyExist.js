const services = require('../services/AllProducts');

module.exports = async (req, res, next) => {
    const { name } = req.body;
    const verify = await services.AllProducts();
    const findName = verify.find((p) => p.name === name); // HOF não aceitam funções assincronas;
    if (findName) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    next();
  };
