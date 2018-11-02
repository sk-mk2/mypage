<template>
<div>
    <h2>WebAuthenticationAPI
    <a href="https://developer.mozilla.org/ja/docs/Web/API/Web_Authentication_API">
    <img src="../image/mdn.png" width="30" height="30" class="low-position">
    </a>
    </h2>
    <a href="https://w3c.github.io/webauthn/#registering-a-new-credential">WebAuthn仕様</a>
    <button v-on:click="webAuth" class="square_btn">Auth Test</button>
    <p>
    FIDOというのがそもそもの技術としてあるのでその知識も必要
    認証器を手に入れなければ
    </p>
    <p>
    ウェブサイトの認証にパスワードやSMSのテキストを
    利用するのではなく、公開鍵暗号を利用する。
    </p>
    <p>
    WebAuthenticationAPIは登録とログインの2つの基本的な機能
    を持っている。
    </p>
    <p>
    認証器があるのが新しいコンセプトなのだが、
    webAuthn認証ではパスワードは認証器の中に格納された鍵ペア
    に置き換わっている。認証器はいろいろなデバイスがなりうる
    </p>

    <h4>登録手順</h4>
    <ol>
        <li>
            アプリケーションが登録要求を行う。
            ここはWebAuthnとは関係ない
        </li>
        <li>
            サーバーがchallenge・ユーザー情報・RP情報を送信。この情報がどういうことかわからない
            まだWebAuthnとは関係ないらしい。通常RESTで接続するだろう
            この受け取ったパラメータはブラウザ側のnavigator.credentials.create()の引数にわたされ
            Promiseを返す。これはAuthenticatorAttestationResponse（なんだこれ）を含んだ
            PublicKeyCredentialを解決するためのものです。
            challengeの値の条件
            <ul>
            <li>challengeに入る値は16byte以上のランダム情報のバッファ</li>
            <li>challengeはセキュリティを確保するために必ずサーバ上で生成しなくてはならない</li>
            </ul>
        </li>
        ブラウザが認証器のauthenticatorMakeCredential()を呼び出す
        （どうやって認証器と接続するんだろ)よしなにしてAuthenticatorResponse.clientDataJSONとなる。
        最も重要なパラメータはoriginらしい。サーバーこのoriginを検証する
        client()の呼び出しのパラメータとclientDataJSONのハッシュ値が認証器に渡される
        <li>
            認証器がユーザが登録に同意していることを確認、方法としてPINの入力や指紋・虹彩認証などがある
            その後認証器が新しい鍵ペアとAttestationを作成
            もう片方の公開鍵は、ある秘密鍵で署名されたattestationの一部になっている。
            その秘密鍵は認証器の製造過程で焼きつけられたもので、認証局にさかのぼって検証可能な証明書チェーンを持っている。
        </li>
        認証器がブラウザーにデータを返す
        データとは新しい公開鍵、世界中で重複の無い一意の認証ID、そして他のattestation情報である。
        そこでattestationObjectになる。（さっきからattestationてなんだよ)

        <li>
            ブラウザーが最終的に送信するデータを作成し、アプリケーションがその戻り値をサーバーに送信
            PublicKeyCredentialを何らかの望ましいフォーマットやプロトコルでサーバーに送る（何らかのってなんだよ）
            ArrayBufferプロパティはbase64か似たようなものでエンコードされている必要がある。
        </li>

        <li>
            サーバが登録が完了して改ざんされていないことを保証することが要求されている
            <ol>
                <li>challengeが送信時と同じものであるか確認</li>
                <li>originが期待されたoriginとなっていることの保証</li>
                <li>clientDataHashの署名と特定モデルの認証器用の証明書チェーンを使ったattestationの検証</li>
            </ol>
        </li>
    </ol>
    
    <h4>
    認証手順 
    </h4>
    大きい違いは認証にはユーザーやRPの情報は必要ないことと
    attestationを作成するのではなく、以前に生成されたキーペアを使用してアサーションを作成する
　　
　　<ol>
    <li>アプリの認証リクエスト</li>
    <li>
        サーバーはchallengeだけ送信
    </li>
    <li>
        ブラウザは認証器上のauthenticatorGetCredential()をよびだす

    </li>
    <li>
        認証器は2つのことを確認する。RPIDに一致するこのサービスのcredenntialを見つける。
        認証に同意するようにユーザに確認。
        これらが成功すると認証器は登録時に生成された秘密鍵でclientDataHashおよびauthenticatorDataを署名することで、
        新しいアサーションを作成する。
    </li>
    <li>
        認証器はauthenticatorDataとアサーションの署名をブラウザに返す。
    </li>
    <li>
        ブラウザは認証器から受け取ったデータを元にサーバにリクエストを送る
        （なにを？）
    </li>
    <li>
        サーバがブラウザからのレスポンスを検証してログインにしたりしなかったり
        <ol>
            <li>
                登録時に格納された公開鍵を使用して、認証器による署名を検証する
            </li>
            <li>
                検証器によって署名されたチャレンジが、サーバによって生成されたものと一致することを確認
            </li>
            <li>
                RPIDがこのサービスに必要なものであることを確認する。（RelyPartyてのもよくわからん）
            </li>
        </ol>
    </li>
    </ol>


</div>
</template>

<script>
import webAuth from './webAuth';
export default {
    methods: {
        webAuth
    }
    
}
</script>


<style>
    .low-position {
        position: relative;
        top: 5px;
    }
</style>

