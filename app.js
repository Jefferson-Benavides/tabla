const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vistas', 'index.html'));
});

app.post('/multiplicacion', (req, res) => {
  const numero = parseInt(req.body.numero);

  if (isNaN(numero) || numero <= 0 || numero >= 100) {
    return res.status(400).send('Número inválido');
  }

  const tablaMultiplicar = [];
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    tablaMultiplicar.push(`${numero} x ${i} = ${resultado}`);
  }

  res.json(tablaMultiplicar);
});

const PUERTO = process.env.PUERTO || 3000;
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
