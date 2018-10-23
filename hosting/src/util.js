export function myFetch(url, options = {}) {
    const myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json; charset=utf-8');
    options.mode = 'cors';
    options.header = myHeaders;
    return fetch(url, options)
    .then((res) => {
        //ここで返ってくるのはtextだけじゃない
        //fetchAPIのMDN参照
        return res.text();
    })
    .then((body) => {
        console.log(body);
        return body;
    })
    .catch((err) => {
        return err;
    });
}
