const sinon = require('sinon');
const {
  expect
} = require('chai');

const salesController = require('../../../controllers/index');
const salesService = require('../../../services/index');


describe('Sales Controller', () => {

  const res = {};
  const req = {};

  describe('testa o status da requisição http da função getAllSales', () => {
    before(() => {
      req.body = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'AllSales').resolves(false);
    });
    after(async () => {
      salesService.AllSales.restore();
    });

    it('requisição deve ser bem sucedida status 200', async () => {
      await salesController.getAllSales(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('encontra a Sale pelo id', () => {
    before(() => {
      req.params = {
        id: 1
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'findSalesId').resolves([
        []
      ]);
    });

    after(() => {
      salesService.findSalesId.restore();
    });

    it('testa se a requisição foi bem sucedida status 200', async () => {
      await salesController.getSalesId(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});
