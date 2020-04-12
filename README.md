# Zhuyin-Secret-Decoder

This tools is for someone who intends to use Zhuyin input method but results in English alphabet, or for someone who wants to decode the secret messages into Madarin. The application takes the English alphabet as input, matches one by one to its original keys represented as Zhuyin characters, finally leverages the Zhuyin input method to get the best fit Madarin characters.

這個工具的啟發來自於某些人想要用注音輸入法但是不小心打成英文，或是某些人想要解碼出別人傳來的加密亂碼。這個應用程式運用使用者輸入的英文字母，一對一轉成鍵盤上對應的注音符號，最後利用注音輸入法來找出最適合對應的中文字。

## "Zhuyin" Definition in [Wikipedia](https://en.wikipedia.org/wiki/Bopomofo)
> Zhuyin, a.k.a "Bopomofo", or Mandarin Phonetic Symbols, is the major Chinese transliteration system for Mandarin Chinese and other related languages and dialects which is nowadays most commonly used in Taiwanese Mandarin Consisting of 37 characters such as ㄅ, ㄆ, ㄇ, ㄈ and four tone marks, it transcribes all possible sounds in Mandarin.

## Demo
 - Website

   You can visit [here](https://iownthegame.github.io/zhuyin-secret-decoder/frontend/index.html) for the **Frontend** demonstration
 - Screen Recording [video](https://youtu.be/CpRfNWBnu-M)

   [![Zhuyin-Secret-Decoder-Video](https://img.youtube.com/vi/CpRfNWBnu-M/0.jpg)](https://youtu.be/CpRfNWBnu-M)
- Example Screenshots
  1. example 1
     - input
       ![](/screenshots/example-1-fart-input.png)
     - output
       ![](/screenshots/example-1-fart-output.png)

  2. example 2
     - input
       ![](/screenshots/example-2-coronavirus-input.png)
     - output
       ![](/screenshots/example-2-coronavirus-output.png)

  3. example 3
     - input
       ![](/screenshots/example-3-zhuyin-input.png)
     - output
       ![](/screenshots/example-3-zhuyin-output.png)

## Installation
- Frontend
    - `cd frontend/`
    - `http-server` (Suppose you have `npm install http-server -g`, by default will run on port `8080`)

- Backend (Node.js Express)
    - development
        - Specify the origin defined as `host` in `app.js` to work around with **CORS**
        - `NODE_ENV=development node app.js` (default port `8000`)

- Go to http://localhost:8080/

## Resources
- [JSZhuyin - JS 注音](https://github.com/timdream/jszhuyin)

## Similar Tools
- [線上注音忘記切換輸入法解碼](https://blog.xuite.net/vexed/tech/66042514)
