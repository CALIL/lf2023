console.log('Hello LooselyTemplate!')

fetch('https://blog.calil.jp/wp-json/wp/v2/posts/?categories=108').then(function(r) { return r.json() }).then(function(r) {
    console.log(r)
    var div = document.getElementById('whatsnew');
    r.map(function(item) {
        var a = document.createElement('a');
        a.href = item.link;
        a.target = '_blank';
        a.innerHTML = item.title.rendered;
        div.appendChild(a);
    })
});