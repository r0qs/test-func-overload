const { BN } = require('@openzeppelin/test-helpers');
const C = artifacts.require("C");

contract('C', (accounts) => {
  it('test C', async () => {
    const [account] = accounts;
    const c = await C.deployed();

    if (process.env.NODE_ENV === 'bug') {
      await c.write("One", { from: account }); // this doesn't work
    } else {
      await c.write("One"); // this work
    }
    assert(c.read(), "One");

    await c.write(new BN(2), "Two", { from: account }); // but this work
    assert(c.read(), "Two");

    await c.write(new BN(2), "Three"); // and this work too
    assert(c.read(), "Three");
  });
});
