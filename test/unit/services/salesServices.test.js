const sinon = require('sinon');
const { expect } = require('chai');

const productsModels = require('../../../models/index');
const productsServices = require('../../../services/index');
describe('Product Service', () => {

  const res = {};
  const req = {};

  describe('testa a função createSale', () => {
    before(() => {
        sinon.stub(productsModels,'updateSale').returns(1);
    });
    after(async () => {
      productsModels.updateSale.restore();
    });

    it('A função "createSale deve retornar" um objeto com informações', async () => {
      const response = await productsServices.createSale([{ productId: 1, quantity: 1 }]);
      expect(response).to.be.an('object');
    });
  })
});