var fs = require('fs')
fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/\.\/index\.css/g, 'https://calil.github.io/lf2021/index.css');
    result = result.replace(/\.\/header\.css/g, 'https://calil.github.io/lf2021/header.css');
    result = result.replace(/\.\.\/assets\//g, 'https://calil.github.io/lf2021/assets/');

    fs.writeFile('./build/index.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});