title: "MAMP起動・終了時のパスワード確認を黙らせよう！"
date: 2011-06-04 22:56:35
tags:
 - Mac
 - Server
id: 331
categories:
  - tool
---

MAMPを起動・終了する度にパスワード入力を求められていませんか？

### なぜMAMPはパスワード入力を求めてくるのか？

デフォルトが「8888」であるApacheの使用ポートを**「1024」より小さい数字に設定した場合、MacOS XのようなUNIX環境下ではIPサービスを開始・終了するためにroot権限が必要**になり、パスワード入力を求められます。

「わざわざ1024より小さい数字で使わなければいいじゃないか。」
と思う人もいるかもしれません。

しかし、WordPressのマルチサイト機能をローカル環境で使用する場合、ポート番号を「80」にして接続する必要があります。

### パスワード無しで起動・終了出来るようにする

まず、キーチェーンアクセス(/Applications/Utilities/)を開き、「+」をクリック。
新しい項目を追加し、項目名は「MAMP」に設定。
アカウント名とパスワードはMacにログインするときのものを入力します。
![キーチェーンにMAMP用の項目を追加](/tool/mamp-password-omi/keychain.jpg "キーチェーンにMAMP用の項目を追加")

[Apache & MySQL – No Password app](http://www.46palermo.com/wp-content/uploads/2010/07/Apache-MySQL-No-Password.zip)をダウンロードし、起動します。

起動すると、「securityは、キーチェーン内の"MAMP"に保存されている機密情報を使用しようとしています。この項目へのアクセスを許可しますか？」と聞かれるので、**「常に許可」**を選択します。

今後は「Apache & MySQL – No Password app」がパスワードレスでMAMPを起動するようになります。
MAMPを直接起動すると今まで通りパスワードを求められます。

OS起動時にMAMPを起動している方は、MAMPを起動時に開かないようにし、Apache & MySQL – No Password appを「ログイン時に開く」に変更してください。

参考サイト
[MAMPをパスワード無しで起動・終了する方法 | Suinasia](http://suin.asia/2011/02/25/run_mamp_without_password "Link to MAMPをパスワード無しで起動・終了する方法 | Suinasia")