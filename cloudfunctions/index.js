const functions = require('firebase-functions')
// cloud functionでfirestoreを使うのに必要な設定は以下の２行
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)


// データベースの参照を作成
var fireStore = admin.firestore()

exports.lfRedirect = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, HEAD');

    // const url = req.query.url
    // res.send(url || 'Hello, World');

    var cityRef = fireStore.collection('lf2020').doc('urls')
    cityRef.get()
        .then(doc => {
            if (!doc.exists) {
                res.send('No such document!')
            } else {
                // res.send(doc.data())
                const urls = doc.data().url
                const url = urls[Math.floor(Math.random() * urls.length)]
                res.redirect(url)
            }
        })
        .catch(err => {
            res.send('not found')
        })
};