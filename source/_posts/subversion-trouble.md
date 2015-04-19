title: "初心者がSubversionでトラブった時に確認すること"
date: 2011-05-25 23:05:17
tags:
id: 193
categories:
  - tool
---

前回、[Macでローカルバージョン管理 – Subversion導入〜Codaで便利活用](http://creamo.jp/tool/mac-svn-coda/ "Macでローカルバージョン管理 – Subversion導入〜Codaで便利活用")という記事でSubversion導入を解説しましたが、自分で記事を書いておいて色々トラブったので、その辺の回避方法等を書いておきます。
<!--more-->
前回の記事通りに行うだけなら問題はありません。
コミット出来なくなった等の問題が起こったときの参考にしてください。

### 新しくリポジトリを作ったがコミットするとエラーになる！

Codaで発生したのですが、この問題で非常に頭を抱えました。
svnの追加は出来たのですが、それ以降のコミットが出来ないんです。
で、分かった結論は

**コミットするときはローカルルートから全てコミットする**

これを覚えておきましょう。
例えば
> /localhost/wp/wp-content/themes/creamo_theme/
このようにWordPressを使っているとして、基本的に自分で編集したりするのはテーマファイルくらいですよね。

バージョン管理をしたいのは[creamo_theme]フォルダだけだとしても、ローカルルートを[/localhost/]にしたのなら、[/wp/]から全て一旦コミットする必要があります。

CodaだとSVNに追加する際はlocalhost上にあるファイルかwpフォルダのみ[？]マークが付いていて追加出来るので、仕方なくwpフォルダをSVNに追加します。
追加すると[A]マークが全てのファイルに付きます。
で、[A]マークが付いていればどれでもコミット出来るかと思いきや、エラーが出ます。
親フォルダがコミットされてない場合は子ファイルをコミットすることが出来ないんです。

そんなことで、もの凄い時間を食いました。
当たり前のようで、無意識的にトラブルを起こすとハマりますね。

### リポジトリをDropboxに設置

[Dropbox](http://db.tt/C1rDVgi)にリポジトリを入れることで、個人でのバージョン管理がとても捗ることは[前回の記事](http://creamo.jp/tool/mac-svn-coda/ "Macでローカルバージョン管理 – Subversion導入〜Codaで便利活用")で説明しました。
ちょっとだけ、説明したいことがあったので書いておきます。

Windows環境ではこの記事が参考になると思います。
[Movable Type 備忘録 - Dropbox と TortoiseSVN でテンプレートのバージョン管理](http://bizcaz.com/archives/2009/01/25-120513.php "Link to Movable Type 備忘録 - Dropbox と TortoiseSVN でテンプレートのバージョン管理")

さて、Mac環境でのDropboxですが、デフォルトでのフォルダ場所が

> /Users/ユーザー名/Dropbox

になっていますが、同期したいマシン間でユーザー名が異なるとパスが統一出来ません。

ということで、Dropboxの設定を変えます。

![Dropbox設定画面](/tool/subversion-trouble/dropbox_option.jpg)

この設定画面で「ファイルの保存場所」を

> /Users/Shared/Dropbox

にします。

あとはリポジトリの作成を

> /Users/Shared/Dropbox

以下に作成すれば完了です。作成方法は[前回の記事](http://creamo.jp/tool/mac-svn-coda/ "Macでローカルバージョン管理 – Subversion導入〜Codaで便利活用")で。

リポジトリにユーザーやパスワードを設定する場合
・ユーザー作成
> リポジトリ/conf/passwd
> [users]
> 
> ユーザー名 = パスワード

というように記述します。

・ユーザー、パスワードを機能を有効にする
> リポジトリ/conf/svnserve.conf

```
[general]
anon-access = none　　　　　　←ユーザー認証しないアクセスはアクセス不可
auth-access = write　　　　　　←ユーザー認証したアクセスでは読み書き可能

password-db = passwd	←passwdファイルを使用してユーザー認証する

realm = Hishidama Repository	←認証の名称
上記の有効にしたい機能の#を取ります。
```

### .svnファイルを削除したい

何気に困ったのがこれ。
SVN設定すると、SVN設定したフォルダ全てに隠しフォルダとして[.svn]フォルダが設置されます。

[.svn]フォルダがあるかをCodaは判断しているので、[.svn]フォルダがある場合はリポジトリ場所が変更出来ないです。

「調子が悪いからリポジトリ作成からやり直したい」等なったとき困ったので、そういうときはコマンドで[.svn]フォルダを一気に消せます。

```bash
$ find . -name ".svn" -type d -exec echo delete {} ";" -exec rm -rf {} ";"
```
上記のコマンドをリポジトリフォルダに移動した後に実行すれば[.svn]フォルダが削除されます。

[管理ディレクトリ（.svn）の削除 - profaim.jp](http://www.profaim.jp/tools/soft/svn/svnother/mac/del_svninfo.php "Link to - profaim.jp")

また、過去の履歴を削除してしまった場合dumpコマンドで復元できます。
[svnadmin:dump/load によるリポジトリのバックアップとリストア - profaim.jp](http://www.profaim.jp/tools/soft/svn/subversion/bk_rest.php "Link to - profaim.jp")

参考サイト
[code.rock: Dropboxで手軽にSubversionのリポジトリ](http://blog.dateofrock.com/2010/01/dropboxsubversionno.html "Link to code.rock: Dropboxで手軽にSubversionのリポジトリ")