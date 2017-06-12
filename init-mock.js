var gas = require('gas-mock');

module.exports = {
  assert: require('chai').assert,
  Sugar: require('sugar'),
  config: require('config'),
  gas: gas,
  default: gas.globalMockDefault
};
