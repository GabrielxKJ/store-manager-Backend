require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routeProducts = require('./routes/products');
const routeSales = require('./routes/sales');

app.use(bodyParser.json());

app.use('/products', routeProducts);
app.use('/sales', routeSales);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
