const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');

const productsModel = require('../../../models/index');

describe('ProductModel', () => {
	describe('verifica se a função', () => {
		const getAllProducts = [
	  {
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
		
		before(async () => {
			const execute = [getAllProducts];
			sinon.stub(connection, 'execute').resolves(execute);
		})

		after( async () => {
			connection.execute.restore();
		});

		it('testa se é retornado um array', async () => {
			const response = await productsModel.searchAllProducts();
			expect(response).to.be.a('array');
		}) 
	})
});