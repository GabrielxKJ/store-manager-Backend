const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');

const productsModel = require('../../../models/index');

describe('ProductModel', () => {
	describe('testa a função geg', () => {
		const getAllSales = [
	  {
			saleId: 1,
			date: "2021-09-09T04:54:29.000Z",
			productId: 1,
			quantity: 2
      },
    ];
		
		before(async () => {
			const execute = [getAllSales];
			sinon.stub(connection, 'execute').resolves(execute);
		})

		after( async () => {
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
		

		before( async () => {
			const execute = [saleById];
			sinon.stub(connection, 'execute').resolves(execute);
		});

		after( async () => {
			connection.execute.restore();
		});

		it('testa se possui "name" como propriedade', async () => {
      const response = await productsModel.searchSalesById(1);
      expect(response).to.be.a('array');
    });
	});

	describe('testa a função "insertProduct" no model', () => {
		const create = [{
			saleId:1,
			productId: 'test',
			quantity: 10
		},
	];
		before(async () => {
			const execute = {}
			sinon.stub(connection, 'execute').resolves(create);
		});

		after( async () => {
			connection.execute.restore();
		});

		it('verifica se a infromação é criada', async () => {
			const [{saleId, productId, quantity}] = create 
			const response = await productsModel.salesProducts(saleId, productId, quantity);
			console.log(response, "cehgueo");
      expect(response).to.be.an('object');
		});
	});
});