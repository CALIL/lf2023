# LF2023

図書館総合展2023向けのヘッダー  
カーリルブース

https://calil.github.io/lf2023/

## Develop

```
npm install  
npm start
```


## ScreenShot

Firefoxでbodyのサイズが1280x750になるように調整  
PhotoShopで1024x600(retina対応)で書き出し  
画像は512x300で表示される


## Deploy

GitHub Actionsで  
コミットするとデプロイされる

```
node ./replace_path.js
```

## 図書館総合展のサイトのCSSハック

```css
<style type="text/css">
body {
overflow-x: hidden;
}
.main-container {
max-width: 100%;
padding: 0;
}
.row {
display: block;
}
.col-sm-12 {
padding: 0;
}
.bs-region--left {
max-width: 100%;
}
</style>
```


## ライセンスについて

The MIT License (MIT)

Copyright (c) 2019 CALIL Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
