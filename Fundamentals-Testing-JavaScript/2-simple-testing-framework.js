const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

test(`sum adds numbers`, () => {
  const result = sum(3, 5);
  const expected = 8;
  expect(result).toBe(expected);
});

test(`subtract subtracts numbers`, () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(error);
    console.error(`✕ ${title}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}
