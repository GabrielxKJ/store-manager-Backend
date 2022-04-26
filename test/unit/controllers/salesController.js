const sinon = require('sinon');
const { expect } = require('chai');

const salesController = require('../../../controllers/index');
const salesService = require('../../../services/index');


describe('Sales Controller', () => {

  const res = {};
  const req = {};

  describe('testa o status da requisição http da função getAllSales', () => {
    beforeEach(() => {

      req.body = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService.AllSales, 'AllSales').resolves(false);
    });
    afterEach(async () => {
      salesService.AllSales.AllSales.restore();
    });

    it('requisição deve ser bem sucedida status 200', async () => {
      await salesController.getAllSales(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('encontra a Sale pelo id', () => {
    beforeEach(() => {
      req.params = {
        id: 1
      };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService.findSalesId, 'findSalesId').resolves([
        []
      ]);
    });

    afterEach(() => {
      salesService.findSalesId.findSalesId.restore();
    });

    it('testa se a requisição foi bem sucedida status 200', async () => {
      await salesController.getSalesId(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});
