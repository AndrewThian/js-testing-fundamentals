const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

const sumAsync = (a, b) => new Promise((resolve) => resolve(a + b));

const subAsync = (a, b) => new Promise((resolve) => resolve(a - b));

module.exports = { sum, sub, sumAsync, subAsync };