const express = require('express')
const app = express()
const port = 8000

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const {JSZhuyin} = require('jszhuyin');
var jszhuyin = new JSZhuyin();
jszhuyin.load()

let mapping = {
	'q':	'ㄆ',
	'w':	'ㄊ',
	'e':	'ㄍ',
	'r':	'ㄐ',
	't':	'ㄔ',
	'y':	'ㄗ',
	'u':	'ㄧ',
	'i':	'ㄛ',
	'o':	'ㄟ',
	'p':	'ㄣ',
	'a':	'ㄇ',
	's':	'ㄋ',
	'd':	'ㄎ',
	'f':	'ㄑ',
	'g':	'ㄕ',
	'h':	'ㄘ',
	'j':	'ㄨ',
	'k':	'ㄜ',
	'l':	'ㄠ',
	';':	'ㄤ',
	'z':	'ㄈ',
	'x':	'ㄌ',
	'c':	'ㄏ',
	'v':	'ㄒ',
	'b':	'ㄖ',
	'n':	'ㄙ',
	'm':	'ㄩ',
	',':	'ㄝ',
	'.':	'ㄡ',
	'/':	'ㄥ',
	'1':	'ㄅ',
	'2':	'ㄉ',
	'3':	'ˇ',
	'4':	'ˋ',
	'5':	'ㄓ',
	'6':	'ˊ',
	'7':	'˙',
	'8':	'ㄚ',
	'9':	'ㄞ',
	'0':	'ㄢ',
	'-':	'ㄦ',
}

var candidates = [];
jszhuyin.oncandidateschange = function(c) {
  candidates = c;
};

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }))
app.post('/', (req, res) => {
  let key = req.body.key


  let string = ""
  for (let i = 0; i < key.length; i++) {
    if (key[i] in mapping) {
      string += mapping[key[i]]
    }
  }

  jszhuyin.handleKey(string)
  let answer = candidates[0][0]
  candidates.pop()
  // clear candidates

  res.send(`key=${key}, string=${string}, answers=${answer}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
