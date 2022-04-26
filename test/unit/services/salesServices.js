const sinon = require('sinon');
const { expect } = require('chai');

const productsModels = require('../../../models/index');
const productsServices = require('../../../services/index');
describe('Product Service', () => {

  describe('testa a função createSale', () => {
    beforeEach(() => {
        sinon.stub(productsModels.insertSale,'insertSale').resolves(1);
    });
    afterEach(async () => {
      productsModels.insertSale.insertSale.restore();
    });

    it('A função "createSale deve retornar" um objeto com informações', async () => {
      const response = await productsServices.createSale.createSale([{ productId: 1, quantity: 1 }]);
      expect(response).to.be.deep.equals({
        id:1,
        itemsSold:[{
          productId:1,
          quantity:1
        }]
      });
    });
  })
});