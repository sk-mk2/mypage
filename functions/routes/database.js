const firebase = require('firebase');
const functions = require('firebase-functions');
require('firebase/firestore');
//環境変数にしなきゃ
//できなくね？
console.log(functions.config().mypage);
firebase.initializeApp({
  apiKey: functions.config().mypage.key,
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
function addMemo(memoObj = {
    hoge: 'fuga'
}){
    db.collection('memos').add(memoObj).then((docRef) => {
        console.log(docRef);
        return docRef;
    }).catch((err) => {
        console.error(err);
        return err;
    });
}


//dbのデータ読み取り
//クエリで絞り込みどうやる？
//すぐ実行終わらないのはなんだ？
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
