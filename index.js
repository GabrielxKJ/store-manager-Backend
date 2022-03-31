require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { getAllProducts, getProductId, getAllSales, getSalesId } = require('./controllers/index');
const { notFoundProductId, notFoundSalesId, validateProducts } = require('./middlewares/index');

app.use(bodyParser.json());

app.get('/products', getAllProducts);
app.get('/products/:id', notFoundProductId, getProductId);
app.get('/sales', getAllSales);
app.get('/sales/:id', notFoundSalesId, getSalesId);
app.post('/products', validateProducts);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
