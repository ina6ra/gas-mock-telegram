var mock = require('./init-mock');

// NodeJS モジュールとして、srcフォルダを読み込む
mock.gas.require(__dirname+'/src', mock.default);
