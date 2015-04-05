title: "DBに溜まったリビジョンを一括削除「Better Delete Revision」"
date: 2011-07-24 16:04:51
tags:
id: 820
categories:
- wordpress
---

「リビジョン」はWordPress2.6から導入された、記事の編集・保存履歴を自動作成し、データベースに格納する機能です。

しかし、記事・ページ数が増えれば増えるほどリビジョンが増え、データベースを圧迫していきます。

そこで今回紹介する**「Better Delete Revision」**は、既に公開済みの記事・ページのリビジョンを一括削除することが出来るプラグインです。<!--more-->

**参考ページ**

・[Better Delete Revision（WordPressリビジョン削除プラグイン）の導入方法と使い方](http://wp-exp.com/blog/better-delete-revision/ "Link to Better Delete Revision（WordPressリビジョン削除プラグイン）の導入方法と使い方")

### 既にDelete Revisionを導入している方へ

簡単に言えば「Better Delete Revision」は「Delete Revision」の改訂版です。

WordPress3以降を使用している場合は「Better Delete Revision」にプラグインを変更した方が良いでしょう。

**※「Better Delete Revision」をインストールする前に「Delete Revision」を削除すること。**

### Better Delete Revision の使用方法

ダウンロード：[Better Delete Revision](http://wordpress.org/extend/plugins/better-delete-revision/ "Link to WordPress › Better Delete Revision « WordPress Plugins")

**1\. WordPress管理画面から「Better Delete Revision」を選択**

**2.「Check Revision Posts」を選択**

![「Check Revision Posts」を選択](http://creamo.jp/wp/wp-content/uploads/2011/07/bdr1.png "「Check Revision Posts」を選択")

※「Optimize Your Database」でDBの最適化が出来ますが、バックアップする必要が出てくるので「WP-DBManager」の使用をオススメします。

詳細は「[WP-DBManagerでデータベースバックアップと最適化を華麗にこなそう](http://creamo.jp/wordpress/wp-dbmanager/ "Link to WP-DBManager")」で紹介しています。

**3\. 現時点で存在するリビジョンの一覧が表示される**

![ 現在存在するリビジョンの一覧が表示](http://creamo.jp/wp/wp-content/uploads/2011/07/bdr2.png " 現在存在するリビジョンの一覧が表示")

**4.下部にある「Yes,I would like to delete them!」を選択し、リビジョンを削除**

![Bdr3](http://creamo.jp/wp/wp-content/uploads/2011/07/bdr3.png "bdr3.png")

--

このプラグインも必須と呼びたいくらいのオススメプラグインです。

他にリビジョン生成機能自体を止めるという方法もありますが、WEB上で編集時に接続が不安定になるということはよくあるので、リビジョン機能は生かしておき、こまめにリビジョン削除するのが無難な方法ではないでしょうか。