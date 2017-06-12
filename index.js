var assert = require('chai').assert;
var Sugar = require('sugar');
var config = require('config');

var gas = require('gas-mock');

function get_mock() {
  
  var mymock = gas.globalMockDefault;
  var glib = gas.require(__dirname+'/src', mymock);
}

module.exports = {get_mock};
