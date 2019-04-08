function expect(actual) {
  return {
    toBe(expected) {
      if (expected !== actual) {
        throw new Error(`[FAILED] ${expected} not equal to ${actual}`);
      }
    }
  }
}

async function test(description, callback) {
  try {
    await callback();
    console.log(`[PASSED] ${description}`)
  } catch (e) {
    console.error(e);
  }
}

global.test = test;
global.expect = expect;

// to run global files:
// $ node --require ./setup-globals.js ./math-test.js