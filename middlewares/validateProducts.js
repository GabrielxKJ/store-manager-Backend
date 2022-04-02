const allProducts = require('../services/AllProducts');

const validateProducts = (req, res, next) => {
    const { name, quantity } = req.body;
    if (name === undefined) {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (name.length < 5) {
      return res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });    
    }
    if (quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (quantity <= 0) { 
    return res.status(422)
    .json({ message: '"quantity" must be greater than or equal to 1' }); 
}
  next();
  };

  const productAlreadyExist = (req, res, next) => {
    const { name } = req.body;
    const verify = allProducts.find(((p) => p.name === name));
    if (verify) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    next();
  };

  module.exports = {
    validateProducts,
    productAlreadyExist,
  };