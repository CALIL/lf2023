var fs = require('fs')
fs.readFile('./docs/index.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/\.\/index\.css/g, 'https://calil.github.io/lf2020/index.css');
    var result = data.replace(/\.\/header\.css/g, 'https://calil.github.io/lf2020/header.css');
    result = result.replace(/\.\.\/assets\//g, 'https://calil.github.io/lf2020/assets/');

    fs.writeFile('./docs/index.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});