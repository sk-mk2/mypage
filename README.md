[![CircleCI](https://circleci.com/gh/sk-mk2/mypage/tree/master.svg?style=svg)](https://circleci.com/gh/sk-mk2/mypage/tree/master)

# mypage

## 使っているもの
- Firebase
    - 簡単
    - cloud functions
        - 無料枠では外部ネットワークのAPIを叩いて接続はできない
        - Expressをつかえる
    - hosting
        - 反映遅い
- Node
- Vue
- CircleCI
    - はやい
    - node_modulesのキャッシュができていない
- webpack
- mocha
    - そもそも走ってない

## 疑問点
- 別ドメインで接続したい場合CORSを使えばよいのか？

[現時点はこうなっている](https://mypage-90953.firebaseapp.com)
