title: "WordPressに導入するベストなGoogle Analyticsプラグイン"
date: 2011-06-23 08:00:56
tags: Analytics
id: 645
categories:
- wordpress
---

アクセス解析の定番となっている「Google Analytics」。

提供されるコードを埋め込むことで、詳細なアクセス解析が可能になります。
しかし、管理者のアクセスはカウントしない等、細かい調整をしたいと思いませんか？GAのフィルタ機能を使えば出来ないことはないですが、ここは簡単に導入可能なプラグインを紹介します。

また、Google AnalyticsのWordPressプラグインは数種類あるので迷うところですが、いくつか試してまとめてみました。<!--more-->

### 今回試用したGoogle AnalyticsのWordPressプラグイン

*   <span>Google Analyticator</span>
*   <span>Ultimate Google Analytics</span>
*   <span>Google Analytics for WordPress</span>
今回は以上の3つのプラグインを使ってみました。

実は「Google Analytics for WordPress」を使っていたのですが、先日書いた「[【FeedBurner使い必見！】はてブ分散を防ぎ、Yahoo!ブログに対応せよ](http://creamo.jp/wordpress/distributed-bookmarks-with-feedburner/ "Link to 【FeedBurner使い必見！】はてブ分散を防ぎ、Yahoo!ブログに対応せよ")」の記事を書く際に、URLパラメータをRSSフィードに強制的に付けていることが判明し、使用を断念しました。今は「Google Analyticator」を使っています。

先に結論を言ってしまうと**「Google Analyticator」の使用をオススメします**。合わせて「Jetpack by WordPress.com」のWordPress.com Statsを使うとより良いです。

今回はこちらのサイトを参考にしました。ちょっと記事が古いのでその辺りをフォローしたいと思います。

[Google Analyticsの勉強メモ(9) WordPress pluginの検討 - atl*weblog](http://weblog.atl-r.net/memo/google-analytics09/ "Link to Google Analyticsの勉強メモ(9) WordPress pluginの検討 - atl*weblog")

### まずはGoogle Analyticsに登録

まずはGoogle Analyticsに登録します。1つのアカウントで複数のサイトを登録出来て、これが無料なんですから使わない手はないです。

[Google アナリティクス | 公式ウェブサイト](http://www.google.com/intl/ja/analytics/ "Link to Google アナリティクス | 公式ウェブサイト")

![Google Analytics](http://creamo.jp/wp/wp-content/uploads/2011/06/ga.png "ウェブ プロパティ ID")

このようにGoogle Analyticsからサイト別にウェブプロパティIDが割り振られるので、このIDを使用していきます。

Googleが提供しているコード
[html]
&lt;script type=&quot;text/javascript&quot;&gt;
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXXX-X']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
&lt;/script&gt;
[/html]
このコードの[UA-XXXXXXX-X]部分をサイトに紐づけられたウェブプロパティIDに書き換えて、headもしくはbody閉じタグ直前に挿入することでアクセス解析がされるようになります。

それでは、この上記のコードの挿入をプラグインにより自動化していきます。

プラグインのメリットとして、Google AnalyticsやWordPressに何らかの変更があっても、更新が頻繁なプラグインなら自動的に対応してくれます。SEOがメインでない人は、アクセス解析に手間はかけられないと思うので、出来るだけ簡単にしておきましょう。

### Google Analyticator

[WordPress › Google Analyticator « WordPress Plugins](http://wordpress.org/extend/plugins/google-analyticator/ "Link to WordPress › Google Analyticator « WordPress Plugins")

消去法で選んだ中ではこれがベストなプラグインです。

更新も早く、WordPress最新版にもすぐに対応し、細かいところまで設定出来ます。

デフォルト設定で十分の動きを見せてくれるはずです。

●最低限の設定手順

1\. 「Google Analytics logging is」をEnabledに

2\. 「Authenticate with Google」でGoogleにログイン。指定のサイトを選択

3\. 「Track all logged in WordPress users」をNoに

4\. 「User roles to not track」でチェックした権限のユーザーはトラッキングされない。

　（3をNoにするで有効になります）

<ins datetime="2011-06-23T18:43:40+00:00">6/24修正（↑Track all logged in WordPress usersの設定が間違っておりました。）</ins>

### Ultimate Google Analytics

[WordPress › Ultimate Google Analytics « WordPress Plugins](http://wordpress.org/extend/plugins/ultimate-google-analytics/ "Link to WordPress › Ultimate Google Analytics « WordPress Plugins")

他のサイトで結構オススメされているようだったので使ってみましたが、うまく認証されませんでした。

原因ははっきりとは分かりませんが、古いコードを使っているので既にGAには対応出来ていないと思われます。

Ultimate Google Analyticsが出力するコード
[html]
&lt;!-- tracker added by Ultimate Google Analytics plugin v1.6.0: http://www.oratransplant.nl/uga --&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
 var gaJsHost = ( (&quot;https:&quot; == document.location.protocol) ? &quot;https://ssl.&quot; : &quot;http://www.&quot;);
 document.write(unescape(&quot;%3Cscript src='&quot; + gaJsHost + &quot;google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E&quot;));
&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
 var pageTracker = _gat._getTracker(&quot;UA-xxxxxx-1&quot;);
 pageTracker._initData();
 pageTracker._trackPageview();
&lt;/script&gt;
[/html]
このpageTracker._initData()というメソッドがくせ者のようです。

更新も止まっているので使わない方が良いでしょう。

### Google Analytics for WordPress

[WordPress › Google Analytics for WordPress « WordPress Plugins](http://wordpress.org/extend/plugins/google-analytics-for-wordpress/ "Link to WordPress › Google Analytics for WordPress « WordPress Plugins")

悪くはないのですが、先述したとおりWordPressが生成するRSSフィードの記事へのリンクにutm_sourceパラメータを付けてしまいます。

これではフィード関係の設定の自由度が少なくなってしまいます。せめて設定でオンオフ出来れば問題なかったのですが、出来ないようなのであまりよろしくありません。

パラメータが付いてても困らない人は使っても問題ありません。

「パラメータって何？」って人は[こちら](http://creamo.jp/wordpress/distributed-bookmarks-with-feedburner/ "Link to 【FeedBurner使い必見！】はてブ分散を防ぎ、Yahoo!ブログに対応せよ")の記事を参考にしてください。