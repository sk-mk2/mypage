export function myFetch(url) {
    return fetch(url, {
        mode: 'cors'
    })
    .then((res) => {
        //ここで返ってくるのはtextだけじゃない
        //fetchAPIのMDN参照
        return res.text();
    })
    .then((body) => {
        return body;
    })
    .catch((err) => {
        return err;
    });
}
