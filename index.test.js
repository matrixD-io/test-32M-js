const load32M = require('./index.js');

describe('load32M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load32M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
