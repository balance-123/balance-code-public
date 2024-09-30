# 開発環境

```
node : v18.0.0~
docker
dockerが未インストールの場合は、下記からインストールをお願いします。
https://docs.docker.com/get-docker/
```

## 初回手順

```
npm install
```

## 環境立ち上げ

```
// dockerの立ち上げ
docker-compose up -d

// vite立ち上げ
npm run dev
localhost:8080でアクセス

// wp設定進める
```

## ビルド

```
// テストアップ時
npm run build
テーマをサーバーにアップ
※manifest.dev.jsonはサーバーにアップしないように注意
```

## その他

```
wp-config.phpにて
define( 'DEV_ENV' , true);
を定義すると、
viteのhotリロードが効きます。
```

## css

```
├── _common：全ページ共通のcss格納（=2ページ以上にまたがるcss）
│   ├── footer.scss
│   ├── header.scss
│   └── subpage：下層ページ共通のcss格納（=下層2ページ以上にまたがるcss）
├── _page：各ページごとのcss格納
│   ├── sample
│   │   └── sample.scss
│   └── top
│       └── wrap.scss
├── _reset.scss：reset css格納
├── _utils
│   ├── animation.scss：共通cssアニメーション格納
│   ├── function.scss：関数格納
│   └── mixin.scss：mixin格納
├── style.scss：全体のscss
└── val.scss：変数格納

・変数や関数はご自由に作成したいただいて大丈夫です。

・topと下層で担当が別なので、下層ページ共通のcssを作成する場合は、_commmon内にsubpageフォルダを切り、その中にご作成ください。

・_pageフォルダ内は、原則当該ページでのみ読み込むようにお願いします。
style.scssでその設定を行います。
https://gyazo.com/2b6294dfd9537b5ea47a5b497783ab59

```
