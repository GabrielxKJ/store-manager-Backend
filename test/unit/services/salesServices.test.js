const sinon = require('sinon');
const { expect } = require('chai');

const productsModels = require('../../../models/index');
const productsServices = require('../../../services/index');
describe('Product Service', () => {

  const res = {};
  const req = {};

  describe('testa a função createSale', () => {
    beforeEach(() => {
        sinon.stub(productsModels.updateSale,'updateSale').returns(1);
    });
    afterEach(async () => {
      productsModels.updateSale.updateSale.restore();
    });

    it('A função "createSale deve retornar" um objeto com informações', async () => {
      const response = await productsServices.createSale.createSale([{ productId: 1, quantity: 1 }]);
      expect(response).to.be.an('object');
    });
  })
});