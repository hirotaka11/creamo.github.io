title: "MacでSubversionを使ってバージョン管理してみよう！Codaと連携も"
date: 2011-05-23 11:51:41
tags:
id: 156
categories:
  - tool
---

バージョン管理とはなんぞや？と思う人もいるかもしれません。

プログラマーの人は当たり前のように使っていますが、WEBデザイナーの人たちはあまり触れることがないかもしれません。

しかし、CodaもDreamweaverも「Subversion(SVN)」というバージョン管理システムに対応するようになりました。

バージョン管理システムは一回使ってみると便利さが身に染みて分かります。
「実装した機能やっぱいらないから、戻しておいて」と言われて涙することってありますよね。
バックアップするのは当然ですが、万が一バックアップし忘れたときや、さらに前のバックアップが必要になったとき、バージョン管理システムは真価を発揮します。

では、Macでバージョン管理システムを使ったこと無い人はこの機会に一度使ってみましょう。

<!--more-->**バージョン管理システム**
バージョン管理にも種類あり、よく使われているのが前述した「[Subversion(SVN)](http://subversion.apache.org/)」で、最近の流行は「[Git](http://git-scm.com/)」というシステムです。
「Subversion」は一つの端末を単体サーバーのように中心として、バージョン管理を行います。
「Git」はそれぞれの端末でソースを持ち合い、同期はそれぞれの端末同士が持っているファイルをやり取りしあいます。複数人で作業を行っている場合、大抵人によって担当のプログラムが割り振られているので「Git」の方が同期時間が少なくて済みますね。また、単体サーバーだと故障したときが心配です。

で、これだと「Git」を使いたくなるのですが、残念ながらCodaはGitに対応していません。CodaとSVNの相性が良いというのもCodaの評判の一つだったので、素直にSVNを導入することにしました。

**MacにSubversionを導入**

まずMacにXcodeをインストールします。
Mac付属のインストールCDからインストールするか、[Appleからダウンロード](http://developer.apple.com/jp/technologies/tools/)出来ます。（最新版のXcode 4は有料なのでXcode 3でOK）

ターミナルを開き
```bash
$ which svn
```
と入力し、「/usr/bin/svn」と返ってきたらOKです。これでsvnコマンドが使えることが確認出来ます。


次にターミナルに下記を入力。（Project-nameには好きな言葉を入れてください）

```bash
$ mkdir -p ~/svn/[Project-name]
$ svnadmin create ~/svn/[Project-name]
```
これで「リポジトリ」が「/ユーザー名/svn/Project-name」に作成されます。
「リポジトリ」というのはバージョン管理してるファイルの置き場です。このフォルダ内にバージョン管理の情報が保存されていきます。

**Dropboxを使う**

便利な使い方として、[Dropbox](http://db.tt/C1rDVgi)を使う方法があります。
先ほどと同じ方法でDropbox内フォルダにリポジトリを作成します。
Dropboxを使うことにより、擬似的にクラウドっぽいバージョン管理が出来るわけです。バックアップも取れますしね。
ただし、問題として複数のPCを同時に起動したり、オフラインで作業したりするとコンフリクトが起こり、バージョン管理がおかしくなります。個人使用の場合は便利かもしれません。

<span style="color: #ff0000;">5/25 追記書きました</span> [初心者がSubversionでトラブった時のためのメモ書き](http://creamo.jp/tool/subversion-trouble/ "初心者がSubversionでトラブった時のためのメモ書き")

[SugarSync](https://www.sugarsync.com/)だと同期するフォルダを既存フォルダから選ぶ方式なので、設定としてはSugarSyncの方が楽です。

**CodaでSVNを使う設定**

![](/tool/mac-svn-coda/coda-checkout.jpg "coda-checkout")

Codaの「サイト」メニューの設定を開き、一番下の「ソースをチェックアウト」をクリックします。

![](/tool/mac-svn-coda/coda-checkout2.jpg "coda-checkout2")

「リポジトリURL」に
> file:///Users/<span style="color: #ff00ff;">ユーザ名</span>/svn/Project-name

を入力します。「ユーザ名」と「パスワード」はユーザーフォルダ内にリポジトリを作成した場合は必要です。

![](/tool/mac-svn-coda/coda-checkin.jpg "coda-checkin")

するとファイル名の横にオレンジ色の「？」マークが付きます。
「？」マークをクリックすると緑色の「A」マークに変わります。
「A」マークにすることで、バージョン管理するファイルとして追加されます。
変更することがないようなファイルは選択する必要ありませんが、全部バージョン管理下に指定しておけばバックアップとしてまるごと取り出すときに役立ちます。

**コミット（チェックイン）**

バージョン管理ソフト共通の手順なのですが、知らない人の為に簡単な説明を。
基本の手順として
「チェックアウト」→「編集」→「チェックイン」
という手順を踏みます。
チェックアウトしないと編集出来ず、チェックインをしないと修正しても保存されません。
複数人で使用しているとチェックアウト中のファイルは他の人が触っているので編集出来ないことになります。これでバージョン管理が成り立っているわけです。

では、Codaでのチェックイン手順です。Codaではコミットという呼びます。
チェックアウト済みのファイルを編集すると、紫色の「M」マークが表示されます。
「M」マークをクリックすることでコミットが実行されます。

コミットする際にコメントを求められますが、コメントするかどうかは自由です。
変更点を簡単に残しておくと、複数人で作業するとき便利です。

大抵の場合は動作確認が取れたらコミットすると思いますので、コミットするファイルは複数あるはずです。

![](/tool/mac-svn-coda/coda-under-bar.jpg "coda-under-bar")

左サイドバー下の一番右のアイコンをクリックします。

![](/tool/mac-svn-coda/coda-source-status.jpg "coda-source-status")

すると「ソース管理ステータス」が開きます。
ここで「すべてコミット」を選択すれば、変更したファイル全てがコミットされます。

**ソースファイル比較**

「ファイル」メニュー、もしくはファイルブラウザ上右クリックから「ソース管理」で比較したり、前のバージョンへ戻すことが出来ます。

「比較」には「FileMerge」というソフトで行われます。
[![](/tool/mac-svn-coda/filemerge1.jpg "filemerge1")](/tool/mac-svn-coda/filemerge1.jpg)

ただし、デフォルトでは「FileMerge」は日本語を含むUTF-8のファイルはうまく比較できません。
おそらく、バージョン管理されてるファイルは何も表示されないです。

そこで、「FileMerge」に簡単な設定をする必要があります。

参考：[開発環境「Xcode Tools」付属の差分表示ツール「FileMerge」をUTF-8対応に - builder](http://builder.japan.zdnet.com/os-admin/sp_snow-leopard-09/20404333/)

Preferencesを表示し、Filtersタブに
> txt | /usr/bin/iconv -c -f UTF-8 -t SJIS  $(FILE) | No
という行を追加します。これで拡張子が「.txt」のUTF-8ファイルを扱うことが出来ます。

[![](/tool/mac-svn-coda/filemerge2.jpg "filemerge2")](/tool/mac-svn-coda/filemerge2.jpg)

あとは同様に拡張子毎に追加していきます。Wordpressを扱ってる人はphp、css等を追加しないといけないですね。

FileMergeは日本語に関するバグが多いらしいので、どうにかしてほしいですね。

参考元：
[Coda で Subversion を試す | appling weblog](http://blog.appling.jp/archives/873)
[Coda を使って Mac のローカルでバージョン管理をする - かたつむりくんのWWW](http://www.tinybeans.net/blog/2010/01/15-173050.html)