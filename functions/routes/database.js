const firebase = require('firebase');
const functions = require('firebase-functions');
require('firebase/firestore');

const ENV = functions.config() || require('../env');
firebase.initializeApp({
  apiKey: ENV.mypage.key,
  authDomain: 'mypage-90953.firebaseapp.com',
  projectId: 'mypage-90953'  
});
// インスタンスの初期化
const db = firebase.firestore();

//なんかやれって警告出た
const settings = {
    timestampsInSnapshots: true
};
db.settings(settings);

//dbのデータ追加
function addMemo(req, res){
    const memoObj = JSON.parse(req.body);
    db.collection('memos').add(memoObj).then((docRef) => {
        console.log(docRef);
        res.send('insert success');
        return docRef;
    }).catch((err) => {
        console.error(err);
        res.send('insert failed');
        return err;
    });
}


//dbのデータ読み取り
//クエリで絞り込みどうやる？
function getMemos(req, res){
    db.collection('memos').get().then((querySnapshot) => {
        const memo = [];
        querySnapshot.forEach((doc) => {
            memo.push(doc.data());
        });
        console.log(JSON.stringify(memo));
        res.send(JSON.stringify(memo));
        return 'success';
    }).catch((err) => {
        return err;
    });
}
module.exports = {
    addMemo,
    getMemos
}

function debugObj(obj){
    const util = require('util');
    return util.inspect(obj, true, null);
}

//アクセス権の管理とかセキュリティ周り必要
