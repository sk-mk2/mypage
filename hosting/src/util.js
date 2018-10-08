export function myFetch(url) {
    const myHeaders = new Headers();
    myHeaders.append('Content-type', 'text/json');
    return fetch(url, {
        mode: 'cors',
        headers: myHeaders
    })
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
