const sinon = require('sinon');
const { expect } = require('chai');

const productsModels = require('../../../models/index');
const productsServices = require('../../../services/index');

describe('Product Service', () => {

  describe('testa a função createProduct', () => {
    beforeEach(() => {
        sinon.stub(productsModels.insertProduct, 'insertProduct').resolves([{id:1}]);
    });
    afterEach(async () => {
      productsModels.insertProduct.insertProduct.restore();
    });

    it('A função "createProduct deve retornar" um objeto com informações', async () => {
      const response = await productsServices.createProduct.createProduct('test', 1);
      expect(response).to.be.deep.equals([{id:1}]);
    });
  });
});