'use strict';

const {JSZhuyin} = require('jszhuyin');
var jszhuyin = new JSZhuyin();
jszhuyin.load();

var candidates = [];
jszhuyin.oncandidateschange = function(c) {
  candidates = c;
};
//jszhuyin.handleKey('ㄐㄊㄌㄞˊㄒㄧㄝˇㄓㄨˋㄧㄣㄕㄖㄈ');
//jszhuyin.handleKey('ㄐㄧㄣㄊㄧㄢㄊㄧㄢㄑㄧˋㄓㄣㄏㄠˇ');
//console.log(candidates[0][0]); // '今天來寫注音輸入法'

/*process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
	console.log("data" + chunk);
});*/

if (process.argv[2]) {
	console.log("translating to Chinese characters...");
	jszhuyin.handleKey(process.argv[2]);
	console.log(candidates[0][0]);
}


