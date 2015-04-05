title: "[入門編]10分でパパッと書けるHTML5"
date: 2011-05-30 18:50:17
tags:
id: 235
categories:
  - webtech
---

まだXHTMLで書いてあるサイトがほとんどですが、WEBデザイナーの個人的なサイトや新規コンテンツサイト等は着々とHTML5化が進んでいます。

ソースで見ないとHTML5ということは分かりませんが、HTML5+CSS3+JavaScriptの組み合わせは非常に魅力的で、わざわざ画像を用意しなくてもコードだけでビジュアル面を強化することが出来ます。

そのおかげでHTML5やCSS3はホームページ作成が流行した時期に比べると、初心者にはちょっと壁が高くなってしまいました。

ということで、まずは**これだけやればHTML5だ！**という要素だけを紹介します。
<!--more-->
私が初めてホームページというものを作ったのが13歳の頃。10年くらい前になります。
あの頃は今のようなカラフルなページなんてなかったです。HTMLだけで作ってるサイトがほとんどで、CSSなんて使わなくてもお金が貰えるような時代でした。

(´Д｀)ﾊｧ…

てなわけで、本題です。

HTML5は現在策定中です。
使い方が変わったりするので、分からないときは確認するようにしましょう。
[HTML5.JP - 次世代HTML標準 HTML5情報サイト](http://www.html5.jp/)

### 宣言

まずはHTML5であることを宣言しましょう。宣言は見ないで書けるほど短くなりました。
[sourcecode lang="html"]
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;ja&quot;&gt;
[/sourcecode]

### head

[sourcecode lang="html"]
&lt;head&gt;
 &lt;meta charset=&quot;utf-8&quot; /&gt;
 &lt;title&gt;タイトル&lt;/title&gt;
 &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot; /&gt;
&lt;/head&gt;
[/sourcecode]

とは言っても、未だに使用者の多いIE6〜IE8はHTML5に対応していません。またCSS3の疑似セレクタにも対応していません。
そこで、スクリプトで対応させます。
使う場合はheadに追記してください。html5.jsはほとんどのサイトで使われています。
[sourcecode lang="html"]
&lt;!--[if lte IE 8]&gt;	
&lt;script src=&quot;./js/html5.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js/DOMAssistantCompressed.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;./js/ie-css3.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;![endif]--&gt;
[/sourcecode]

### body

典型的な文です。
[sourcecode lang="html"]
&lt;body&gt;
 &lt;div id=&quot;wrapper&quot;&gt;
  &lt;header&gt;
   &lt;hgroup&gt;
    &lt;h1&gt;タイトル&lt;/h1&gt;
    &lt;h2&gt;サブタイトル&lt;/h2&gt;
   &lt;/hgroup&gt;
  &lt;/header&gt;
  &lt;nav&gt;
   &lt;h2&gt;ナビゲーション&lt;/h2&gt;
    &lt;ul&gt;
     &lt;li&gt;&lt;a href=&quot;#&quot;&gt;カテゴリ1 &lt;/a&gt;&lt;/li&gt;
     &lt;li&gt;&lt;a href=&quot;#&quot;&gt;カテゴリ2 &lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
  &lt;article&gt;
   &lt;h2&gt;記事タイトル&lt;/h2&gt;
    &lt;section&gt;
     &lt;h3&gt;見出し&lt;/h3&gt;
     &lt;p&gt;記事本文&lt;/p&gt;
    &lt;/section&gt;
   &lt;aside&gt;
    &lt;time datetime=&quot;2009 09-09 00:00 AM&quot;&gt;2009 09-09 00:00 AM&lt;/time&gt;
   &lt;/aside&gt;
  &lt;/article&gt;
  &lt;footer&gt;
   &lt;address&gt;Copyright &amp;amp;amp;copy; 2011 CreaMo! by hirotaka .&lt;/address&gt;
  &lt;/footer&gt;
 &lt;/div&gt;
&lt;/body&gt;
[/sourcecode]

### 新要素説明

困るのはbodyですね。かなり変わりました。
以下は簡単に説明してあるだけなので、説明は出来るだけ公式を見た方が良いです。
[HTML5.JP - 次世代HTML標準 HTML5情報サイト](http://www.html5.jp/)

楽になったのは、divのidでヘッダー、フッターを作っていたのに対して、header、footerという要素が使えるようになったことです。
もちろんheader、footerは要素なので、何回も使えます。記事毎にfooter要素を使っても良いわけです。

<dl>
<dt>**nav要素**</dt><dd>ナビゲーション、サイドバーです。</dd>
<dt>**article要素**</dt><dd>記事に使います。</dd>
<dt>**section要素**</dt><dd>divに似ています。article,nav,asideでなかったらsectionを使うという感じでしょうか。</dd>
<dt>**div要素**</dt><dd>最終手段に使うらしいです。</dd>
<dt>**hgroup要素**</dt><dd>そのままの意味でh1〜h6の見出しをグループ化するものです。</dd>
<dt>**aside要素**</dt><dd>記事の補足や広告など、見出しに直接的には関係しない補助的なものに使います。</dd>
<dt>**address要素**</dt><dd>連絡先情報の記述。ただし、そのサイトに属さない人の連絡先情報はaddress要素で囲むべきではありません。</dd>
</dl>

新しい要素に関してはこのような感じでしょうか。
見出しについては重要なものからh1→h6ということを守れば、制作者に任されます。

### 古いブラウザへの対応

このような新しいコーディングをすると困るのがIE6の対応です。
既にネット上ではIE6撲滅運動なるものがあり、作ったマイクロソフトでさえもIE6の使用を止めるよう促しています。
WEBデザイナーにとってもかなり邪魔な存在です。

Chrome、Firefoxがブラウザ自身でアップデートするのに対して、IEに関してはOS巻き込んで更新をするため、古いブラウザが使われやすいです。
今でもIE6を使っている層はIE6でしか動かないアプリを使っている企業やWindows2000以下が現役で動いているユーザーです。

IE6の対応は今現在はされていますが、そのうち淘汰されるでしょう。
デザイナーによってはIE6の対応を追加料金で請け負うことも増えてきました。

**せっかくなので、IE6を使っている人たちに注意文を出してみましょう。**
[sourcecode lang="html"]
&lt;!--[if lte IE 6]&gt;	
&lt;p id=&quot;caution&quot;&gt;&lt;strong&gt;あなたは旧式ブラウザをご利用中です&lt;/strong&gt;このウェブサイトを快適に閲覧するにはブラウザをアップグレードしてください。&lt;/p&gt;
&lt;![endif]--&gt;
[/sourcecode]
これでオッケーですね。ブラウザDL先へのリンクを貼ると更に良いかもしれません。

**来年にはWindows8の登場に伴ってIE10が登場する可能性が高いです。**
WEBデザイナーとしてはテストブラウザが増え続けるのは勘弁したいところです。

いやしかし、なんでIEだけバージョン別に見ないといけないんでしょうかね。
Chromeなんて自動アップデートですからバージョン気にしたことがほとんどないです。
IEだけですよ。IE6,IE7,IE8,IE9全てがちょっとずつ違う挙動して、修正に困るブラウザは。

WEB関係の人たちはほとんどがChrome、Firefoxに移ってるのに･･･。
マイクロソフトは罪なことをしましたねー。

参考サイト
・[HTML5 下位ブラウザへの対応 - シャンディ・ガフを飲みながら](http://shoonm.com/2010/03/html5.html)
・[多摩美 - メディアリテラシー 2010 HTML5+CSS3 入門 | yoppa org](http://yoppa.org/taumedia10/1695.html)
・[XHTMLとHTML5の組み方を見比べてみる | CSS Lecture](http://www.css-lecture.com/log/xhtml/xhtml-html5.html)

<div class="booklink-box" style="text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;"><div class="booklink-image" style="float:left;margin:0 15px 10px 0;">[![](http://ecx.images-amazon.com/images/I/51PS4NY8NqL._SL160_.jpg)](http://c.af.moshimo.com/af/c/assignment/external?a_id=146047&p_id=170&pc_id=185&pl_id=4062&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fwww.amazon.co.jp%2Fexec%2Fobidos%2FASIN%2F4844362003%2Fref%3Dnosim)</div><div class="booklink-info" style="line-height:120%;/zoom: 1;overflow: hidden;"><div class="booklink-name" style="margin-bottom:10px;line-height:120%">[web creators特別号　HTML5＋CSS3　次世代Webコーディングの超・最新動向 (インプレスムック エムディエヌ・ムック)](http://c.af.moshimo.com/af/c/assignment/external?a_id=146047&p_id=170&pc_id=185&pl_id=4062&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fwww.amazon.co.jp%2Fexec%2Fobidos%2FASIN%2F4844362003%2Fref%3Dnosim)<div class="booklink-powered-date" style="font-size:8pt;margin-top:5px;font-family:verdana;line-height:120%">posted with [ヨメレバ](http://yomereba.com)</div></div><div class="booklink-detail" style="margin-bottom:5px;">web creators編集部 MdN 2011-05-28    </div><div class="booklink-link2" style="margin-top:10px;"><div class="shoplinkamazon" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 0 no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[Amazon](http://c.af.moshimo.com/af/c/assignment/external?a_id=146047&p_id=170&pc_id=185&pl_id=4062&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fwww.amazon.co.jp%2Fexec%2Fobidos%2FASIN%2F4844362003%2Fref%3Dnosim "アマゾン")</div><div class="shoplinkrakuten" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -50px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[楽天ブックス](http://c.af.moshimo.com/af/c/assignment/external?a_id=146048&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11206260%2F "楽天市場")</div><div class="shoplinkseven" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -100px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">7net</div><div class="shoplinkbk1" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -150px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[bk1![](http://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=2756067&pid=879867541)](http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2756067&pid=879867541&vc_url=http%3A%2F%2Fwww.bk1.jp%2FkeywordSearchResult%2F%3Fkeyword%3D4844362003 "bk1")</div><div class="shoplinkbookoff" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -200px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">ブックオフ</div><div class="shoplinkehon" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -250px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[e-hon![](http://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=2756067&pid=879961581)](http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2756067&pid=879961581&vc_url=http%3A%2F%2Fwww.e-hon.ne.jp%2Fbec%2FSA%2FDetail%3FrefISBN%3D4844362003 "e-hon")</div></div></div></div>