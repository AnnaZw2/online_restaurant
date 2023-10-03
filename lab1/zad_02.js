"use strict";
const products = [
    { name: "Product 1", price: 10, quantity: 2 },
    { name: "Product 2", price: 5, quantity: 4 },
    { name: "Product 3", price: 8, quantity: 3 },
    { name: "Product 4", price: 12, quantity: 1 },
];
const calculateProductValue = (product, cb) => {
    setTimeout(() => {
        const value = product.price * product.quantity;
        cb(value);
    }, Math.floor(Math.random() * 1000));
};
const calculateTotalValue = (n, cb) => {
    let total = [];
    products.slice(0, n).forEach((el) => {
        calculateProductValue(el, ((value) => {
            total.push(value);
            if (total.length == n) {
                cb(total.reduce((acc, curr) => curr + acc, 0));
            }
        }));
    });
};
calculateTotalValue(3, console.log);
