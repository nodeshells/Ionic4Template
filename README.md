# Ionic4Template

----
## これはなに？
- ionic4のテンプレートファイルです。

## インストール方法(node npm angular-cli等インストール済みとする)
- npm i -g ionic
- npm i -g cordova

## 注意点
- IosOnly
    - CLIビルド用のnpm packageをあらかじめインストールしておく
    - Iosの実機でテストする場合、Xcode上のProjectSettingのビルドセッテイングを[LegacyBuildSystem]へ変更すること
    - Xcode上でチーム設定を選択すること
    - Xcode上で一回ビルドして、アプリからの承認要求に許可する
    - Code65が出た時はXcode上で走らせてエラーを確認する
    - 上記を終わらせた後はCLI上からアプリのビルドができる
    - cordovaのバックグラウンドモードプラグインをリポジトリから直接取り込まないとエラーが出る
        - config.xmlに追加してしまった場合削除後にリポジトリから取ってくるコードに書き換える
    