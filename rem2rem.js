var fs = require('fs')
var sass = './src/sass/index.sass';
fs.readFile(sass, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
//   console.log(data)
  var result = data.replace(/([\d+\.]+)rem/g, function(match) {
    console.log(match)
    var m = match.match(/[\d+\.]+/);
    return 'rem(' + m + ')';
  });

  fs.writeFile(sass, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});