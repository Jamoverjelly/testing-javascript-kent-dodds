// sum is intentionally broken so you can see errors in the tests
sum = (a, b) => a - b;
subtract = (a, b) => a - b;

// simulating asynchronous function code
sumAsync = (...args) => Promise.resolve(sum(...args));
subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { sum, subtract, sumAsync, subtractAsync };
