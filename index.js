var mock = require('./init-mock');

function set_mock(mymock) {
  if(mymock == null) mymock = mock.default;
  return mock.gas.require(__dirname+'/src', mymock);
}

module.exports = {set_mock};
