title: "[WordPress]最新jQueryを呼び出したらフロントページが設定不可に"
date: 2011-06-30 08:34:04
tags: jQuery
id: 666
categories:
- wordpress
---

以前書いた「[WordPressでjQuery等の外部ファイルを読み込む方法](http://creamo.jp/wordpress/jquery-load-wordpress/ "Link to WordPressでjQuery等の外部ファイルを読み込む方法")」で、Google AJAX APIを使用してjQueryを呼び出す方法を紹介しました。

通常、外部ファイルの呼び出しはheadに記述しますが、WordPressの場合はfunction.phpに記述しても可能です。

しかし、今回この方法をfuction.phpで行った際、管理画面に問題が発生したので載せておきます。
<!--more-->

### フロントページが設定出来なくなる

WordPressの[表示設定]->[フロントページの表示]

で、[固定ページ]を設定したいときに問題が発生します。

[最新の投稿]でフロントページを表示する場合は問題ありません。

「設定出来なくなる」というのは文字通りの意味で、

![フロントページの表示](http://creamo.jp/wp/wp-content/uploads/2011/06/wp_frontpage.png "フロントページの表示が設定出来なくなった状態")

[固定ページ]を選択するとセレクトボックスが選択可能になるのですが、選択可能になってくれません。

このまま[変更を保存]を押しても無効になり、[最新の投稿]にカーソルが戻ります。

以下の一文がfunction.phpに入っていること原因だということが分かりました。
[php]&lt;?php wp_deregister_script( 'jquery' ); ?&gt;[/php]

このコードはGoogleAPIからjQueryを呼び出すために、WordPressが内蔵している古いjQueryの呼び出しを消しています。用語で言うと、フィルターフックを削除しています。

内蔵jQueryを消している理由は
[php]
&lt;?php
wp_deregister_script( 'jquery' );
wp_deregister_script( 'jquery-ui-core' ); //jQuery UIを使わない場合は不要

wp_enqueue_script('jquery','http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js');
wp_enqueue_script('jquery-ui-core','http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js', array('jquery'));
/* 以下、その他のjQueryプラグインの読み込み */
?&gt;
[/php]
上記のコードで最新のjQueryを読み出す処理をしている為です。

内蔵しているjQueryをそのまま使う場合は何も起こりませんでした。

**function.phpでjQueryの最新版を使う場合のみ発生するようです。**

これは他の要因も関与している可能性があるので、発生しない方もいるかもしれません。

まさか管理画面のフロントページの設定画面にこんな影響が出るとは思いもよらず驚きました。

function.phpは管理画面にも影響を与える可能性があることを念頭に置いておきましょう。