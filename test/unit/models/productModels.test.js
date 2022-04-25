const sinon = require('sinon');
const {
  expect
} = require('chai');
const connection = require('../../../models/connection');

const productsModel = require('../../../models/index');

describe('ProductModel', () => {
  describe('testa a função geg', () => {
    const getAllProducts = [{
        "id": 1,
        "name": "product A",
        "quantity": 10
      },
      {
        "id": 2,
        "name": "product B",
        "quantity": 20
      }
    ];

    beforeEach(async () => {
      const execute = [getAllProducts];
      sinon.stub(connection, 'execute').resolves(execute);
    })

    afterEach(async () => {
      connection.execute.restore();
    });

    it('testa se é retornado um array', async () => {
      const response = await productsModel.searchAllProducts();
      expect(response).to.be.a('array');
    });
  });

  describe('testa a função "searchProductById" do model', () => {
    const productById = [{
      "id": 1,
      "name": "produto A",
      "quantity": 10,
    }];

    beforeEach(async () => {
      const execute = [productById];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    afterEach(async () => {
      connection.execute.restore();
    });

    it('testa se possui "name" como propriedade', async () => {
      const response = await productsModel.searchProductById(1);
      expect(response).to.have.a.property('name');
    });
  });

  describe('testa a função "insertProduct" no model', () => {
    const create = {
      name: 'test',
      quantity: 10
    }
    beforeEach(async () => {
      const execute = [{
        insertId: 1
      }]
      sinon.stub(connection, 'execute').resolves(execute);
    });
    afterEach(async () => {
      connection.execute.restore();
    });

    it('verifica se é adicionada a informação correta', async () => {
      const response = await productsModel.insertProduct(create);
      expect(response).to.be.have.a.property('id');
    });
  });
});
