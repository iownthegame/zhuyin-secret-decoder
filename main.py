# -*- coding: utf-8 -*-
mapping = {
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

string = raw_input('Let me help you translate: \n')

print "translating to zhuyin..."
new_string = ""
for s in string:
	if s in mapping:
		new_string += mapping[s]
	#else:
		#new_string += s
print new_string

from subprocess import call
call(["node", "--harmony_destructuring", "read.js", new_string])
