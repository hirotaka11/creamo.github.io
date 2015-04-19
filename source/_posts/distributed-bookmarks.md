title: "URL正規化によって、パラメータによる分散を防ぐ"
date: 2011-06-20 19:49:31
tags:
id: 550
categories:
  - webtech
---

FacebookやTwitterからのリンクには「utm_source〜」というURLパラメータが付くことがあります。

これは[Google Analytics](http://www.google.com/support/googleanalytics/bin/answer.py?hl=jp&answer=55578)のためのパラメータで、アクセス解析の際にどこから来たのかをより詳細に調べるために付いています。

しかし、別のパーマリンクとして判定されてしまうため、はてなブックマークでブックマークしても本来のパーマリンクとutm_source〜のリンクは別扱いとされてしまい、はてブ数が合算されません。

詳細なアクセス解析には必須ですが、個人利用ではパラメータは必要ないですよね。

### URLパラメータを取り除く方法

手段としては

*   <span>rel=”canonical”タグを使う（WordPressは搭載済み）

【フィード経由の記録が残らない】</span>
*   <span>.htaccessを編集して「?utm_source〜」があるときはリダイレクトする

【フィード経由の記録が残らない】</span>
*   <span>JavaScriptを使って表示後にリダイレクトする

【2重に開くことになり、ページビューが不正確に、そしてサーバー負荷へ繋がる】</span>
という4つの方法があり、上からオススメな順です。複数適用させるのもありだと思います。

### URLの正規化 rel="canonical" で重複コンテンツの発生を防ぐ

rel="canonical"タグについての説明はこちら
[スマートフォン用ページに振り分けるときはrel=”canonical”を設定する | 海外SEO情報ブログ](http://www.suzukikenichi.com/blog/using-rel-canonical-to-point-to-desktop-pages-if-you-have-smartphone-pages/ "Link to スマートフォン用ページに振り分けるときはrel=”canonical”を設定する | 海外SEO情報ブログ")

検索時にデスクトップ用とスマートフォン用両ページのインデックス化を防ぐために、現在Googleが推奨しているタグです。

Yahoo!、Bingも対応しているのですが、現時点でまともに処理出来ているのはGoogleだけみたいです。

しかし、いつの間にか「はてなブックマーク」も対応していました。
[ブックマークレットでの URL の正規化に対応しました - はてなブックマーク日記 - 機能変更、お知らせなど](http://hatena.g.hatena.ne.jp/hatenabookmark/20090618/1245312744 "Link to ブックマークレットでの URL の正規化に対応しました - はてなブックマーク日記 - 機能変更、お知らせなど")

インデックスしてほしいURLを入れ、以下のコードをhead要素内に入れます。
```html
<link rel="canonical" href="ページの正確な正規化された URL" />
```

このタグを入れることによって、utm_source〜が付いたURLからはてブしようとすると

![はてブ canoncial](/webtech/distributed-bookmarks/hatebu_canoncial.png "タグがある際のはてなブックマーク表示")

このように、ブラウザ拡張の場合は本来のURLがあることを教えてくれます。

「以下のURLに変更」とありますが、このボタンを押さなくても指定したURLに変換してくれるので分散することはありません。

ページ上に貼り付ける「はてブボタン」は本来のURLがあることを提示してくれませんが、ブックマークする際には変換して登録されます。

古いボタンだと対応しない場合があるらしいのですが、対応してから年月も経っているので心配する必要はないでしょう。

ちなみにWordPress2.9以降では自動的にrel=”canonical”タグを挿入してくれます。（wp-includes/canonical.php）

WordPressを普通に使う上でははてブ分散に気を遣わなくていいようですね。

### .htaccessを編集しパラメータがある場合はリダイレクトする

.htaccessを編集することで301リダイレクトを使用します。

301リダイレクトを使うことで、サービスがパラメータをつけようと必ずパラメータを取り除いたページを表示します。

パラメータを完全排除するので、フィード経由の記録はGoogle Analyticsに残りません。

.htaccessを編集します。以下の部分を追記するだけです。indexリダイレクトの前に追記してください。

(.*)部分は各自変更してください。

例）パーマリンクにhtml拡張子を与えている人は(.html)

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

↓追記

RewriteCond %{QUERY_STRING} utm_source=
RewriteRule ^(.*)$ /$1? [R,L]

↑追記

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```

301リダイレクトについてはrel=”canonical”タグと比べた面白い記事がありました

[301リダイレクトよりもrel=”canonical”タグを使うことに利点はあるのか？ | 海外SEO情報ブログ](http://www.suzukikenichi.com/blog/is-there-advantage-to-using-rel-canonical-over-301-redirect/ "Link to 301リダイレクトよりもrel=”canonical”タグを使うことに利点はあるのか？ | 海外SEO情報ブログ")

この記事では、まだSEOを考えると301リダイレクトに有用性はあるようです。なにしろrel=”canonical”タグを推奨しているGoogleの人が言ってますからね。

### JavaScriptを使ってフィード経由の記録を残しながら、パラメータを取り除く

RSSに広告を貼っていたりして、RSS経由なことをGoogle Analyticsに残しておきたい。かつ、utm_sourceパラメータを取り除きたいという場合に使います。

ただし、ページを2回開くことになるので、ページビューの集計が通常より増えてしまい、アクセスが多いページではサーバーへの負荷に繋がります。

```html
<script type="text/javascript">
function utmCut(){
　var utmCut = location.search
if (utmCut.match(/(utm_)/g)) {
location.replace( location.pathname );
}
}
</script>
</head>
<body onLoad="utmCut();">
```

[同じエントリへのはてブがバラバラに付く - Shin x blog](http://www.1x1.jp/blog/2009/12/wordpress_how_to_exclude_url_parameters_from_feedburner.html "Link to 同じエントリへのはてブがバラバラに付く - Shin x blog")