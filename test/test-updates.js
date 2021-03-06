var mock = require('../init-mock');
var assert = mock.assert;
var Sugar = mock.Sugar;
var config = mock.config;

var mymock = mock.default;

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = mock.gas.require('./src', mymock);

describe('updates.js', function() {

  var uid;
  var token;
  var method;
  var url;
  var json;
  var result;
  var setup = config.get('Setup');
  var fixture = config.get('Fixture');

  // test for getUpdateID()
  describe('#getUpdateID()', function() {
    it('should return Number Class', function() {
      // Properties.getProperty の上書き
      Sugar.Object.set(mymock, 'Properties.getProperty', function(key) {
        return setup['ScriptProperties'][key];
      });
      uid = glib.Telegram.BotAPI.getUpdateID();
      assert.typeOf(uid, 'Number');
    });
    it('NaN 対応（文字列を無理矢理 数値変換した場合）');
    it('ScriptProperties が引数として渡された場合');
  });

  // test for getApiToken()
  describe('#getApiToken()', function() {
    it('should return API Token of gevanni_bot', function() {
      token = glib.Telegram.BotAPI.getApiToken();
      assert.equal(token, setup['ScriptProperties']['api_token']);
    });
    it('ScriptProperties が引数として渡された場合');
  });

  // test for getApiUrl()
  describe('#getApiUrl()', function() {
    it('should return API Url', function() {
      method = 'getUpdates';
      url = glib.Telegram.BotAPI.getApiUrl(token, method);
      assert.equal(url, setup['telegraApi']['url']);
    });
  });

  // test for getUpdates()
  describe('#getUpdates()', function() {
    it('should return false when the webhook is deactive', function() {
      // UrlFetchApp.fetch の上書き
      Sugar.Object.set(mymock, 'UrlFetchApp.fetch', function(url, params) {
        return this.response;
      });
      // HTTPResponse.getContentText の上書き
      Sugar.Object.set(mymock, 'HTTPResponse.getContentText', function(charset) {
        return JSON.stringify(fixture['getUpdates']['webhook']);
      });
      json = glib.Telegram.BotAPI.getUpdates(url);
      assert.equal(json, false);
    });

    it('should return Array Class', function() {
      // HTTPResponse.getContentText の上書き
      Sugar.Object.set(mymock, 'HTTPResponse.getContentText', function(charset) {
        return JSON.stringify(fixture['getUpdates']['Array']);
      });
      json = glib.Telegram.BotAPI.getUpdates(url);
      assert.typeOf(json.result, 'Array');
    });

    it('with offset');
  });
});
