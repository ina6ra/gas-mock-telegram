var mock = require('../init-mock');
var assert = mock.assert;

var mymock = mock.default;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = mock.gas.require('./src', mymock);

describe('Code.js', function() {

  describe('#myFunction()', function() {
    it('myFunction 関数が無いこと', function() {
      assert.equal(glib.hasOwnProperty('myFunction'), false);
    });
  });
});
