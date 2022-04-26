const sinon = require('sinon');
const { expect } = require('chai');

const productsModels = require('../../../models/index');
const productsServices = require('../../../services/index');
describe('Product Service', () => {
  describe('testa a função createSale', () => {
    beforeEach(() => {
        sinon.stub(productsModels,'updateProducts').returns(1);
    });
    afterEach(async () => {
      productsModels.updateProducts.restore();
    });

    it('A função "createProduct deve retornar" um objeto com informações', async () => {
      const response = await productsServices.createProduct('test', 1);
      expect(response).to.be.an('object');
    });
  });
});