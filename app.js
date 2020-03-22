const express = require('express')
const app = express()
const port = 8000

if(process.env.NODE_ENV === 'development') {
  const host = 'http://localhost:8080'
  // Add headers
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', host);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });
}

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const { JSZhuyin } = require('jszhuyin');


const mapping = {
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

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }))
app.get('/api', (req, res) => {
  let key = req.query.key
  // console.log(`key=${key}`)

  let string = key.split('').map(k => {
    if (k in mapping) {
      return mapping[k]
    }
    if (Object.values(mapping).indexOf(k) > -1) {
      return k
    }
    return ''
  }).join('')
  // console.log(`string=${string}`)

  if (!string) {
    return res.json({
      status: 0,
      zhuyin: '',
      chinese: ''
    })
  }

  let jszhuyin = new JSZhuyin()
  let candidates = []

  jszhuyin.load()
  jszhuyin.oncandidateschange = function(c) {
    candidates = c
  };

  jszhuyin.handleKey(string)
  let answer = candidates[0][0]

  res.json({
    status: 0,
    zhuyin: string,
    chinese: answer
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
