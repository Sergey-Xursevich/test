const assert = require('assert');
Object.freeze(assert);
const pow = require('./src/script.js');

it('should check if brackets sequence is correct 1', () => {
  assert.equal(pow(2, 2), 4);
});

it('should check if brackets sequence is correct 2', () => {
  assert.equal(pow(2, 3), 8);
});

it('should check if brackets sequence is correct 3', () => {
  assert.equal(pow(2, 1), 2);
});