const { shoppingList } = require('./data');
const { v4: uuidv4 } = require('uuid');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  res.send(shoppingList);
});

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = shoppingList.find(el => el.id === id);

  if (product) {
    res.send(product);
  } else {
    res.sendStatus(404);
  }
});

app.post('/api/products', (req, res) => {
  const data = req.body;

  if (!data || !data.name || !data.quantity) {
    res.sendStatus(400);
  } else {
    const newObj = { id: uuidv4(), name: data.name, quantity: data.quantity }
    shoppingList.push(newObj);

    res.send(newObj);
  }
});

app.put('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const index = shoppingList.findIndex(el => el.id === id);

  if (index >= 0) {
    if (!data || !data.name || !data.quantity) {
      res.sendStatus(400);
    } else {
      shoppingList[index] = {
        ...shoppingList[index],
        name: data.name, 
        quantity: data.quantity
      }

      res.send(shoppingList[index]);
    }
  } else {
    res.sendStatus(404);
  }
});

app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const index = shoppingList.findIndex(el => el.id === id);

  if (index >= 0) {
    shoppingList.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})