const sinon = require('sinon');
const { expect } = require('chai');

const productsController = require('../../../controllers/index');
const productsServices = require('../../../services/index');


describe('Product Controller', () => {

  const res = {};
  const req = {};

  describe('testa o status da requisição http da função getAllProducts', () => {
    before(() => {
      req.body = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'AllProducts').resolves(false);
    });
    after(async () => {
      productsServices.AllProducts.restore();
    });

    it('requisição deve ser bem sucedida status 200', async () => {
      await productsController.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('testa a função "create" no controller', () => {
    before(() => {
      req.body = {
        name: 'new Product',
        quantity: '22',
      }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});
      sinon.stub(productsServices, 'createProduct').resolves({
        "name": "thor",
        "quantity": 10
      });
    });

    after(async () => {
      productsServices.createProduct.restore();
    });

    it('se o produto foi criado', async () => {
      const rt = await productsController.postProduct(req, res);
      expect(rt).to.be.a('object');
    });
  });

  describe('teste da função delete', () => {
    before(() => {
      req.params = {
          id: 1,
      }  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'excludeProduct').resolves(false);
    });
    after(async () => {
      productsServices.excludeProduct.restore();
    });

    it('testa se é retornado status 204 "No Content"', async () => {
     const rt = await productsController.deleteProduct(req, res);
     console.log(rt);
      expect(res.status.calledWith(204)).to.be.equal(true);
    });
  });
});