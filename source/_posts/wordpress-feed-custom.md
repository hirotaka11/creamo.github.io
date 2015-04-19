title: "WordPressがはき出すRSSフィードを制御する方法"
date: 2011-06-19 00:51:47
tags: RSS
id: 534
categories:
- wordpress
---

WordPressは様々なRSSフィードをはき出しています。

WordPress2.8以降では「記事全体」「コメント」「記事単体」の3種類を出力するようになりましたが、コメントがそこまでない場合は正直不要です。
また、RSSを登録してくれるユーザーを惑わしてしまうかもしれません。

ということで、WordPressが出力するフィードを制御してみましょう。<!--more-->

### フィードを出力する方法

WordPressが出力しているフィードの形式は

*   <span>RDF/RSS 1.0</span>
*   <span>RSS 0.92</span>
*   <span>RSS 2.0</span>
*   <span>Atom</span>
の4つです。

例えば、当サイトのヘッダを見るとこんな感じになってます。
```html
<link rel="alternate" type="text/xml" title="RSS .92" href="http://creamo.jp/feed/rss/">
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://creamo.jp/feed/">
<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="http://creamo.jp/feed/atom/">
```

デフォルトテーマ等を使っていたりするとヘッダにこんな記述をしていなくてもRSSが出力されています。
それはfunction.phpに
```php
>?php add_theme_support('automatic-feed-links'); ?> /* WordPress3用 */
<?php automatic_feed_links(); ?>* WordPress2用 */
```

が記述されている為です。

automatic-feed-links は投稿とコメントのフィードへのlink要素を追加する関数です。

function.phpに上記のコードが記述されていることでヘッダの＜?php wp_head(); ?＞内にfeedへのリンクが自動的に生成されます。

automatic-feed-links を使わない場合は、header.phpに「＜link rel="alternate" type="application/atom+xml"〜」を追記します。

配信するフィード形式を自分で決めたい場合はこの方法が良いかもしれません。

フィードに関しては以下を参照

[WordPress Feeds - WordPress Codex 日本語版](http://wpdocs.sourceforge.jp/WordPress_Feeds "Link to WordPress Feeds - WordPress Codex 日本語版")

[関数リファレンス/add theme support - WordPress Codex 日本語版](http://wpdocs.sourceforge.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support "Link to 関数リファレンス/add theme support - WordPress Codex 日本語版")

### フィード配信を止める

**親テーマの場合**
上記の説明通り、function.phpから automatic-feed-link を消します。

それでもlink要素が生成されてしまう場合は以下の remove_action を追記してください。

**子テーマの場合(automatic-feed-linkを使う場合)**
fuaction.phpに関しては子テーマのfunction.phpが親テーマを上書きするのではありません。

親子両テーマのfunction.phpを読み込み、子テーマを優先する仕組みになっています。

親テーマのfunction.phpでlink要素を生成している場合は、子テーマで削除させる必要があるわけです。

ヘッダ内からフィードのlink要素を削除したい場合はfunction.phpに以下のコードを追記します。

```php
remove_action('wp_head', 'feed_links', 2); /* サイト全体のフィード */
remove_action('wp_head', 'feed_links_extra', 3); /* その他のフィード */
```

**コメントフィードのlink要素のみを削除したい場合**

```php
remove_action('wp_head', 'feed_links_extra', 3);
```

のみを追記します。カテゴリーフィードのlink要素等も削除されます。

### remove_actionについて

remove_actionはremove_filterの別名です。add_actionで登録されているフックを削除する関数です。
```php
remove_action( 'フック名', 'フックに登録されている関数名', 優先度 );
```

ただし、上記のコードはlink要素を削除しているだけなので、「http://www.example.com/?feed=rss2」等にアクセスすると、フィードが見えてしまいます。

詳しくは以下を参照

[関数リファレンス/remove action - WordPress Codex 日本語版](http://wpdocs.sourceforge.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/remove_action "Link to 関数リファレンス/remove action - WordPress Codex 日本語版")

### 検索避けの為にフィードの生成自体を止めたい

検索避けがしたい場合、RSS自体に検索避けは施せないので、フィードの生成自体を止めた方が無難です。

そういう場合は上記のremove_actionと以下のコードを追加します。
```php
add_action('do_feed', 'disable_our_feeds', 1);
add_action('do_feed_rdf', 'disable_our_feeds', 1);
add_action('do_feed_rss', 'disable_our_feeds', 1);
add_action('do_feed_rss2', 'disable_our_feeds', 1);
add_action('do_feed_atom', 'disable_our_feeds', 1);
```

これでフィードの生成が止まり、フィードのURLへアクセスしても表示されません。

参考サイト

[WordPress のコメントフィードを削除する - Bluespeaker](http://www.bluespeaker.jp/blog/website/wordpress/4206.html "Link to WordPress のコメントフィードを削除する - Bluespeaker")
[WordPressでの検索避け &lt; wordpressの使い方（小説サイトver）](http://wpnovel.bex.jp/wp/wordpress-kensakuyoke/ "Link to WordPressでの検索避け &lt; wordpressの使い方（小説サイトver）")
[WordPressのヘッダを変更してフィードをカスタマイズ | モノについてのモノ語り](http://www.near-mint.com/blog/157 "Link to WordPressのヘッダを変更してフィードをカスタマイズ | モノについてのモノ語り")