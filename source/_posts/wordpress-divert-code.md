title: "WordPressで何度も使うコードを簡単に使い回す方法"
date: 2011-06-21 02:30:09
tags:
id: 570
categories:
- wordpress
---

はてブ・Twitter・Facebookのボタンを付けるのがもはや当たり前のような流れになっています。

WordPressのプラグインで追加するのが一番簡単なのですが、微妙な調整が出来なかったりするので、テーマに直接貼り付けています。
しかし、トップページと個別ページとアーカイブページと･･･という感じに同じコードを何度も貼り付けるのはあまりよろしくありません。

テーマファイルのfunction.phpにコードを書くことで、コードを簡単に呼び出すことができて、使い回しも簡単になります。<!--more-->

### テーマファイルのfunction.phpに使い回したいコードを追記する

ここでは当サイトのソーシャルボタンを例にします。このままコピペしても使えます。

(mixiボタンはチェックキーを取得する必要があるので載せてません)

[html]
function snsBtn()
{ ?&gt;
	&lt;ul class=&quot;sns-button&quot;&gt;
		&lt;!-- はてなブックマーク --&gt;
		&lt;li class=&quot;hatenaBtn&quot;&gt;&lt;a href=&quot;http://b.hatena.ne.jp/entry/&lt;?php the_permalink() ?&gt;&quot; class=&quot;hatena-bookmark-button&quot; data-hatena-bookmark-title=&quot;&lt;?php the_title() ?&gt;&quot; data-hatena-bookmark-layout=&quot;standard&quot; title=&quot;このエントリーをはてなブックマークに追加&quot;&gt;&lt;img src=&quot;http://b.st-hatena.com/images/entry-button/button-only.gif&quot; alt=&quot;このエントリーをはてなブックマークに追加&quot; width=&quot;20&quot; height=&quot;20&quot; style=&quot;border: none;&quot; /&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;!-- Twitter --&gt;
		&lt;li class=&quot;twitterBtn&quot;&gt;&lt;a href=&quot;http://twitter.com/share&quot; class=&quot;twitter-share-button&quot; data-count=&quot;horizontal&quot; data-lang=&quot;ja&quot;&gt;Tweet&lt;/a&gt;&lt;/li&gt;
		&lt;!-- Facebook --&gt;
		&lt;li class=&quot;fbBtn&quot;&gt;&lt;iframe src=&quot;http://www.facebook.com/plugins/like.php?href=&lt;?php the_permalink() ?&gt;&amp;amp;layout=button_count&amp;amp;show_faces=false&amp;amp;width=100&amp;amp;action=like&amp;amp;colorscheme=light&amp;amp;height=20&quot; scrolling=&quot;no&quot; frameborder=&quot;0&quot; style=&quot;border:none; overflow:hidden; width:100px; height:20px;&quot; allowTransparency=&quot;true&quot;&gt;&lt;/iframe&gt;&lt;/li&gt;
		&lt;!-- +1 --&gt;
		&lt;li class=&quot;p1Btn&quot;&gt;&lt;g:plusone size=&quot;medium&quot; href=&quot;&lt;?php the_permalink() ?&gt;&quot;&gt;&lt;/g:plusone&gt;&lt;/li&gt;
		&lt;!-- Evernote --&gt;
		&lt;li class=&quot;evBtn&quot;&gt;&lt;a href=&quot;#&quot; onclick=&quot;Evernote.doClip({}); return false;&quot;&gt;&lt;img src=&quot;http://static.evernote.com/article-clipper-jp.png&quot; alt=&quot;Clip to Evernote&quot; /&gt;&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;&lt;!-- sns-button --&gt;
&lt;?php }[/html]

**読み込みを早くするためにソーシャルボタン用のJavaScriptはフッターで読み込ませます。**
以下をフッターのwp_footer();の下にコピペ
[html]
&lt;!-- snsBtn用script --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://b.st-hatena.com/js/bookmark_button.js&quot; charset=&quot;utf-8&quot; async=&quot;async&quot;&gt;&lt;/script&gt; &lt;!-- はてなブックマーク --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://platform.twitter.com/widgets.js&quot;&gt;&lt;/script&gt; &lt;!-- Twitter --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://static.evernote.com/noteit.js&quot;&gt;&lt;/script&gt; &lt;!-- Evernote --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://apis.google.com/js/plusone.js&quot;&gt;{lang: 'ja'}&lt;/script&gt; &lt;!-- +1 --&gt;
&lt;!-- /snsBtn用script --&gt;
[/html]

### テーマファイルの表示したい場所に以下のコードを貼り付ける

[php]&lt;?php snsBtn(); ?&gt;[/php]

これだけです。とても簡単にコードの使い回しが出来ます。

snsBtn();の名前を変えるだけで何個も作れますね。

PHPのinclude関数を使えば使い回しは出来ますが、PHPファイルは最小限にしたいですし、せっかくのテーマファイルなのでfunction.phpに書くのがベストだと思います。

ソーシャルボタンのコードは以下のサイトで簡単に作れます
[ブログ・サイトに貼る主要ソーシャルサービスのボタンソースジェネレータ :: 5509](http://5509.me/log/social-service-buttons-generator "Link to ブログ・サイトに貼る主要ソーシャルサービスのボタンソースジェネレータ :: 5509")

テーマファイルがとても見やすくなるので使わない手はありませんね。

参考サイト

[WordPress にはてブと Twitter と Facebook のボタンを10秒で貼り付けられるコードを書いてみたよ | ウェブル](http://weble.org/2010/11/26/wordpress-social-button "Link to WordPress にはてブと Twitter と Facebook のボタンを10秒で貼り付けられるコードを書いてみたよ | ウェブル")