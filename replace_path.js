var fs = require('fs')
fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/\/assets\/main\.css/g, 'https://calil.github.io/lf2021/assets/main.css');
    result = result.replace(/\/assets\/main\.js/g, 'https://calil.github.io/lf2021/assets/main.js');
    // result = result.replace(/\.\/header\.css/g, 'https://calil.github.io/lf2021/header.css');
    result = result.replace(/\.\/assets\//g, 'https://calil.github.io/lf2021/assets/');

    fs.writeFile('./build/index.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});