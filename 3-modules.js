// CommonJS, every file is module (by default)
// Modules - Encapulated Code (only share minimum)
const titles = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind-grenade')
sayHi('Luffy')
sayHi(titles.zoro)
sayHi(titles.sanji)