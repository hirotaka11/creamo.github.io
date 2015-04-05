title: "【FeedBurner使い必見！】はてブ分散を防ぎ、Yahoo!ブログに対応せよ"
date: 2011-06-20 19:49:31
tags:
id: 550
categories:
  - webtech
---

FeedBunerやTwitterFeedからのリンクには「utm_source〜」というURLパラメータが付くことがあります。

これは[Google Analytics](http://www.google.com/support/googleanalytics/bin/answer.py?hl=jp&answer=55578)のためのパラメータで、アクセス解析の際にどこから来たのかをより詳細に調べるために付いています。

しかし、別のパーマリンクとして判定されてしまうため、はてなブックマークでブックマークしても本来のパーマリンクとutm_source〜のリンクは別扱いとされてしまい、はてブ数が合算されません。

詳細なアクセス解析には必須ですが、個人利用ではパラメータは必要ないですよね。

また、FeedBurnerはYahoo!ブログ検索と非常に相性が悪いのが有名ですが、はてブ対策をする過程でYahoo!ブログ検索に検知されるようになります。ついでに行っておきましょう。

以下ではFeedBurnerについての様々な対策を紹介していきます。<!--more-->

### URLパラメータを取り除く方法

手段としては

*   <span>rel=”canonical”タグを使う（WordPressは搭載済み）

【サービスが対応しているかに依存する】</span>
*   <span>FeedBunerの設定で「?utm_source〜」パラメータがつかないように設定する

【フィード経由の記録が残らない】</span>
*   <span>.htaccessを編集して「?utm_source〜」があるときはリダイレクトする

【フィード経由の記録が残らない】</span>
*   <span>JavaScriptを使って表示後にリダイレクトする

【2重に開くことになり、ページビューが不正確に、そしてサーバー負荷へ繋がる】</span>
という4つの方法があり、上からオススメな順です。複数適用させるのもありだと思います。

**Yahoo!ブログ検索の対策はFeedBunerの設定部分で説明します。**

### URLの正規化 rel="canonical" で重複コンテンツの発生を防ぐ

rel="canonical"タグについての説明はこちら
[スマートフォン用ページに振り分けるときはrel=”canonical”を設定する | 海外SEO情報ブログ](http://www.suzukikenichi.com/blog/using-rel-canonical-to-point-to-desktop-pages-if-you-have-smartphone-pages/ "Link to スマートフォン用ページに振り分けるときはrel=”canonical”を設定する | 海外SEO情報ブログ")

検索時にデスクトップ用とスマートフォン用両ページのインデックス化を防ぐために、現在Googleが推奨しているタグです。

Yahoo!、Bingも対応しているのですが、現時点でまともに処理出来ているのはGoogleだけみたいです。

しかし、いつの間にか「はてなブックマーク」も対応していました。
[ブックマークレットでの URL の正規化に対応しました - はてなブックマーク日記 - 機能変更、お知らせなど](http://hatena.g.hatena.ne.jp/hatenabookmark/20090618/1245312744 "Link to ブックマークレットでの URL の正規化に対応しました - はてなブックマーク日記 - 機能変更、お知らせなど")

インデックスしてほしいURLを入れ、以下のコードをhead要素内に入れます。
[html]&lt;link rel=&quot;canonical&quot; href=&quot;ページの正確な正規化された URL&quot; /&gt;[/html]

このタグを入れることによって、utm_source〜が付いたURLからはてブしようとすると
![はてブ canoncial](http://creamo.jp/wp/wp-content/uploads/2011/06/hatebu_canoncial.png "タグがある際のはてなブックマーク表示")

このように、ブラウザ拡張の場合は本来のURLがあることを教えてくれます。

「以下のURLに変更」とありますが、このボタンを押さなくても指定したURLに変換してくれるので分散することはありません。

ページ上に貼り付ける「はてブボタン」は本来のURLがあることを提示してくれませんが、ブックマークする際には変換して登録されます。

古いボタンだと対応しない場合があるらしいのですが、対応してから年月も経っているので心配する必要はないでしょう。

ちなみにWordPress2.9以降では自動的にrel=”canonical”タグを挿入してくれます。（wp-includes/canonical.php）

WordPressを普通に使う上でははてブ分散に気を遣わなくていいようですね。

### FeedBurnerの設定を変更することでパラメータを取り除く

上記のrel="canonical"タグだけではてブの分散は回避出来ます。

しかし、はてブ以外のサービスが対応しているかは分かりません。このままではサービスが対応しているかに依存してしまいます。

それではSEO対策としては未熟ですよね。なので、より強固な対策を練りましょう。

**FeedBurner経由での記事へのリンクURLは3通り**

FeedBurnerの設定を変えるだけでパラメータを除去することが可能です。

設定次第で記事へのリンクURLが変わり、そのパターンは3種類に分かれます。

FeedBurnerのページを開き「レポート/FeedBurnerスタッツ」の設定画面を表示します。

![FeedBurnerスタッツの設定](http://creamo.jp/wp/wp-content/uploads/2011/06/feedburner_01.png "FeedBurnerスタッツの設定を変更します")

**1\. FeedBurnrerページへジャンプ後リダイレクト、utm_sourceパラメータが付く設定**

![「Track click as a traffic source in Google Analytics」にチェックが入っているとき](http://creamo.jp/wp/wp-content/uploads/2011/06/feedburner_02.png "FeedBurnrerページへジャンプ後リダイレクト、utm_sourceパラメータが付く設定")

[html]http://feedproxy.google.com/~r/creamo_jp/~3/j4TmraN4iPE/[/html]
上記のようにFeedBurnerのジャンプページを挟んだ後に
[html]http://creamo.jp/wordpress/jquery-load-wordpress/?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+creamo_jp+%28CreaMo%21+%E3%82%AF%E3%83%AA%E3%82%A8%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E3%82%92Motto%21%E9%9B%86%E3%82%81%E3%82%8B%E3%83%96%E3%83%AD%E3%82%B0%29&amp;utm_content=FeedBurner[/html]
このような超長いURLにリダイレクトされます。

タイトルを日本語で取得しているせいで余計長いですね。

**2\. FeedBurnrerページへジャンプ後リダイレクト、パラメータは付かない設定**

![「記事のクリックスルー集計」のみ有効](http://creamo.jp/wp/wp-content/uploads/2011/06/feedburner_03.png "FeedBurnrerページへジャンプ後リダイレクト、パラメータは付かない設定")

「Track click as a traffic source in Google Analytics」のチェックを外すことで、ジャンプページは挟みますが、utm_sourceパラメータは付かなくなります。ジャンプページを挟むことでRSSからの各記事のクリック数が集計されます。

当然ですが、パラメータを取り除いたことでフィード経由の記録はGoogle Analyticsに残りません。

**3\. ジャンプページ、リダイレクトもなく記事の通常URLにリンクする設定**

![「記事のクリックスルー集計」をOFF](http://creamo.jp/wp/wp-content/uploads/2011/06/feedburner_04.png "ジャンプページ、リダイレクトもなく記事の通常URLにリンクする設定")

「記事のクリックスルー集計」のチェックも外すと、ジャンプページもutm_sourceパラメータもなくなり、通常URLへリンクします。

FeedBurnerになにもやって欲しくない場合はこの設定ですね。

ジャンプページ、パラメータをなくしても、「読まれた数」は集計されます。これはアフィリエイトと同様の方法でRSSフィード記事中に埋め込んだ1x1pixelのgifを読み込むことでカウントしているからです。

### FeedBurnerのRSSをYahoo!ブログ検索に対応させる

上記のFeedBurnerの設定をすることで、Yahoo!ブログ検索に対応させることができます。

**「記事のクリックスルー集計」をOFFにする**

ジャンプページにFeedBurnerを挟んだことが原因でYahoo!は検索から弾いているようです。RSSのリンク先にFeedBurnerを挟まなければ普通に検索されるわけですね。

**Yahoo!ブログ検索へのPING送信先を変更する**

Yahoo!ブログ検索ロボットへのPING送信先は「http://api.my.yahoo.co.jp/RPC2」となっていますが、[ヘルプ](http://help.yahoo.co.jp/help/jp/blog-search/blog-search-18.html)を見てみるともう一つあることが分かります。

[html]http://api.my.yahoo.co.jp/rss/ping?u=FeedBurnerに設定している出力元フィードのURI[/html]

こちらに設定しておくことで、ロボットがFeedBurnerのフィードではなく、WordPressのが出力している標準のフィードを読みに行きます。

原理的に考えれば、上記2つの方法のうち1つだけで問題ないはずですが、念のため両方やっておいた方が良いみたいです。

また、場合によっては両方おこなっても出来ない可能性はあります。各自検証してみてください。

### .htaccessを編集しパラメータがある場合はリダイレクトする

.htaccessを編集することで301リダイレクトを使用します。

301リダイレクトを使うことで、FeedBurner以外のサービスがパラメータをつけようと必ずパラメータを取り除いたページを表示します。

パラメータを完全排除するので、フィード経由の記録はGoogle Analyticsに残りません。

.htaccessを編集します。以下の部分を追記するだけです。indexリダイレクトの前に追記してください。

(.*)部分は各自変更してください。

例）パーマリンクにhtml拡張子を与えている人は(.html)
[sourcecode]
&lt;IfModule mod_rewrite.c&gt;
RewriteEngine On
RewriteBase /

# ↓追記
RewriteCond %{QUERY_STRING} utm_source=
RewriteRule ^(.*)$ /$1? [R,L]
# ↑追記

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
&lt;/IfModule&gt;
[/sourcecode]

301リダイレクトについてはrel=”canonical”タグと比べた面白い記事がありました

[301リダイレクトよりもrel=”canonical”タグを使うことに利点はあるのか？ | 海外SEO情報ブログ](http://www.suzukikenichi.com/blog/is-there-advantage-to-using-rel-canonical-over-301-redirect/ "Link to 301リダイレクトよりもrel=”canonical”タグを使うことに利点はあるのか？ | 海外SEO情報ブログ")

この記事では、まだSEOを考えると301リダイレクトに有用性はあるようです。なにしろrel=”canonical”タグを推奨しているGoogleの人が言ってますからね。

### JavaScriptを使ってフィード経由の記録を残しながら、パラメータを取り除く

RSSに広告を貼っていたりして、RSS経由なことをGoogle Analyticsに残しておきたい。かつ、utm_sourceパラメータを取り除きたいという場合に使います。

ただし、ページを2回開くことになるので、ページビューの集計が通常より増えてしまい、アクセスが多いページではサーバーへの負荷に繋がります。
[js]
&lt;script type=&quot;text/javascript&quot;&gt;
function utmCut(){
　var utmCut = location.search
  if (utmCut.match(/(utm_)/g)) {
    location.replace( location.pathname );
  }
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body onLoad=&quot;utmCut();&quot;&gt;
[/js]
動作確認

Win

Firefox3.6、IE6、IE7、IE8、Chrome5.0.317.2、Opera10.10、Safari4.0.4

Mac

Firfox3.5.3、Safari4.0.4、NetScape7.1

### 何故かパラメータが外れない人へ

そもそも、FeedBunerの設定で「記事のクリックスルー集計」をOFFにするだけでパラメータは取り除けるはずなんですが、何故か私のページは出来ませんでした。

半日以上格闘し「Google Analytics for WordPress」というプラグインが原因だということが判明しました。このプラグインを使っている方はWordPressのフィード生成時点でパラメータが付いてしまうので、301リダイレクトを使うか、違うプラグインを使用しましょう。

詰まったら、プラグインを解除して試すのが一番です。

参考サイト

[FeedBurnerのRSSからの記事へのリンクURLは3通り - ヲレサイト](http://woresite.jp/2010/06/19/054808.html "Link to FeedBurnerのRSSからの記事へのリンクURLは3通り - ヲレサイト")

[FeedBurner経由の人だけ、はてなブックマークが違うブックマークになる件 | Web活メモ帳](http://blog.verygoodtown.com/2010/02/feedburner-hatena-bookmark-entry-change/ "Link to FeedBurner経由の人だけ、はてなブックマークが違うブックマークになる件 | Web活メモ帳")

[FeedBurnerを利用したままYahoo!ブログ検索にインデックスさせる方法 : web memo.Ver.2](http://128bit.blog41.fc2.com/blog-entry-215.html "Link to FeedBurnerを利用したままYahoo!ブログ検索にインデックスさせる方法 : web memo.Ver.2")

[同じエントリへのはてブがバラバラに付く - Shin x blog](http://www.1x1.jp/blog/2009/12/wordpress_how_to_exclude_url_parameters_from_feedburner.html "Link to 同じエントリへのはてブがバラバラに付く - Shin x blog")