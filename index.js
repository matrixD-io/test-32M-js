const fs = require('fs').promises;

/**
 * Returns the contents of 32M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('32M.bin', 'binary');
  return Buffer.from(data);
};
