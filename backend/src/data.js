const { v4: uuidv4 } = require('uuid');

exports.shoppingList = [
  { id: uuidv4(), name: "Apples", quantity: 3 },
  { id: uuidv4(), name: "Bread", quantity: 1 },
  { id: uuidv4(), name: "Milk", quantity: 2 },
  { id: uuidv4(), name: "Yogurt", quantity: 4 },
  { id: uuidv4(), name: "Tomatoes", quantity: 5 }
]