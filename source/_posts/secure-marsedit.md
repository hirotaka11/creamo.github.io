title: "MarsEditで急に投稿出来なくなった時の対処方法"
date: 2011-08-01 01:00:53
tags:
id: 814
categories:
- WordPress
- MarsEdit
---

WordPressの記事作成は「MarsEdit」という投稿ツールを使っています。

しかし、急に「MarsEdit」で記事が取得不可能になりました。
色々と調べていくと「Secure WordPress」プラグインが原因になっている模様。

もしくは、MarsEditの記事保持数が多いのが原因になっているようです。

今回はMarsEditで発生した症状とその対処方法の紹介をしていきます。<!--more-->
<span style="color: #ff0000;">8/1 記事保持数が関係していることが分かったので追記しました。</span>

### 問題が発生した環境

*   <span>[WordPress](http://ja.wordpress.org/) 3.2.1</span>
*   <span>[MarsEdit](http://www.red-sweater.com/marsedit/) 3.3.1</span>
*   <span>[Secure WordPress](http://wordpress.org/extend/plugins/secure-wordpress/) 2.0.3</span>

### 発生した症状

MarsEditで取得更新をしても以下のようなエラーが発生。投稿は可能。

最新記事、カテゴリの取得が不可能になる。

> **Get Recent Posts Error**
> 
> Can’t get recent posts for CreaMo! because the server reported an error: unexpected response code 500.

![MarsEditエラー](/wordpress/secure-marsedit/marsedit-err.png "MarsEditエラー")

今までは使えていたので、Secure WordPressに何らかの修正が加えられたと考えられます。

つまり「XML-RPC」での接続をSecure WordPressが遮断してることになります。

Secure WordPressの設定で「Really Simple Discovery」を無効にしなければいいと考えましたが、Secure WordPressが有効になっている限り取得不可です。

取得するにはSecure WordPressを無効にするしかありません。

また、別の原因としてMarsEditが取得する記事数の容量が多いと発生します。テキストだけならデフォルトの30記事で問題ないですが、画像の多い記事が増えてくるとエラーが起こるようです。

### 回避方法

Secure WordPressを無効にするしかないのですが、無効にするにはなかなか惜しいプラグインです。

注目すべきは、MarsEditでの投稿自体はこのままでも出来るということです。

MarsEditを用いた再編集やカテゴリを変更した時以外はデータ取得出来なくても困らないので、取得するときだけSecure WordPressを無効にする方法が一番無難かと思います。

Secure WordPressについての記事はこちら

[SecureWordPressでWordPressのセキュリティをアップ](http://creamo.jp/wordpress/secure-wp/ "Link to SecureWordPressでWordPressのセキュリティをアップ")

また、もう一つの原因はMarsEditの設定です。取得記事の容量が原因なので、取得する記事数を減らしましょう。ブログ設定を開き、取得記事数、ページ数を減らします。

初期設定は30記事なので、エラーが起こったら20記事くらいに減らしてみましょう。

![Marsedit設定画面](/wordpress/secure-marsedit/marsedit-setting.jpg "取得記事数を減らしてみる")

これでエラーが出なくなるはずです。しかし、よく色んなエラーが起こるので、ココに載っている対処法だけでは解決しないことがあるかもしれません。