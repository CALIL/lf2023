var fs = require('fs')
fs.readFile('./build/index.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/\/lf2023\/assets\/index\.css/g, 'https://calil.github.io/lf2023/assets/index.css');
    result = result.replace(/\/lf2023\/assets\/main\.js/g, 'https://calil.github.io/lf2023/assets/main.js');
    result = result.replace(/\.\/src\/js\/index\.js/g, 'https://calil.github.io/lf2023/js/index.js');
    result = result.replace(/\.\/assets\//g, 'https://calil.github.io/lf2023/assets/');

    fs.writeFile('./build/index.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});

fs.readFile('./build/header.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/\/lf2023\/assets\/header\.css/g, 'https://calil.github.io/lf2023/assets/header.css');
    result = result.replace(/\/lf2023\/assets\/header\.js/g, 'https://calil.github.io/lf2023/assets/header.js');
    result = result.replace(/\.\/assets\//g, 'https://calil.github.io/lf2023/assets/');

    fs.writeFile('./build/header.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});