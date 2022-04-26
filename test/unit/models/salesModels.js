const sinon = require('sinon');
const {
  expect
} = require('chai');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/index');

describe('ProductModel', () => {
  describe('testa a função "getAllSales" do model', () => {
    const getAllSales = [{
      saleId: 1,
      date: "2021-09-09T04:54:29.000Z",
      productId: 1,
      quantity: 2
    }, ];

    beforeEach(async () => {
      const execute = [getAllSales];
      sinon.stub(connection, 'execute').resolves(execute);
    })

    afterEach(async () => {
      connection.execute.restore();
    });

    it('testa se é retornado um array', async () => {
      const response = await productsModel.searchAllSales();
      expect(response).to.be.a('array');
    });
  });

  describe('testa a função "searchProductById" do model', () => {
    const saleById = [{
      date: "2021-09-09T04:54:29.000Z",
      productId: 1,
      quantity: 2
    }];


    beforeEach(async () => {
      const execute = [saleById];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    afterEach(async () => {
      connection.execute.restore();
    });

    it('testa se possui "name" como propriedade', async () => {
      const response = await productsModel.searchSalesById(1);
      expect(response).to.be.a('array');
    });
  });

  describe('testa a função "insertProduct" no model', () => {
    beforeEach(async () => {
      sinon.stub(connection, 'execute').resolves(1);
    });

      afterEach(async () => {
        connection.execute.restore();
      });

      it('verifica se a infromação é criada', async () => {
        const {
          id,
          productId,
          quantity
        } = {
          id: 1,
          productId: 1,
          quantity: 1
        };

        await productsModel.salesProducts(id, productId, quantity);
        expect(connection.execute.calledOnce).to.be.true;
      });
    });
  });
