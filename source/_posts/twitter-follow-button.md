title: "Twitterがフォローしやすいボタンを公開してくれたよ！"
date: 2011-06-01 19:38:49
tags:
id: 269
categories:
  - webtech
---

Twitterがついにフォローボタンを公開しました。
[ Twitter / フォローボタン](http://twitter.com/about/resources/followbutton "Twitter / フォローボタン")

既にウィジェットやツイートボタンは様々な場所で使われていますよね。
ツイートボタンは既に設置が当たり前になっていますが、このボタンも同様に普及するんじゃないでしょうか。
<!--more-->
[![フォローボタン](http://creamo.jp/wp/wp-content/uploads/2011/06/twitter_follow-300x203.jpg "フォローボタン")](http://creamo.jp/wp/wp-content/uploads/2011/06/twitter_follow.jpg)
上記のフォームに入力していくだけで簡単に作成出来ます。

今まではフォローミーというボタンを設置しても、プロフィールページへリンクし、リンク先でフォローするという形でしたが、それが省略されます。

フォローボタンを押すとOAuth認証画面がポップアップするので、そこで自身のユーザーIDとパスワードを入力すればフォロー完了です。
フォロー済みの場合は、Facebookの「いいね！」ボタンのように「フォロー中」と表示されるので分かりやすいですね。

また、ボタンの横にはフォロワー数も表示出来ます。
表示するかしないかは微妙なところですが、サイト閲覧者にフォローして欲しい場合は積極的に設置してみてはどうでしょうか。

以下ソースコードです。(背景:明るい,フォロワー数:非表示,言語:日本語)
[sourcecode lang="html"]
&lt;a href=&quot;http://twitter.com/&lt;span style=&quot;color: #ff0000;&quot;&gt;ユーザID&lt;/span&gt;&quot; class=&quot;twitter-follow-button&quot; data-show-count=&quot;false&quot; data-lang=&quot;ja&quot;&gt;Follow @&lt;span style=&quot;color: #ff0000;&quot;&gt;ユーザID&lt;/span&gt;&lt;/a&gt;
&lt;script src=&quot;http://platform.twitter.com/widgets.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
[/sourcecode]

### 試しに作ってみました

これは背景が明るい用のフォロワー数付きですね。
ボタンの言語が選べますが、日本語か英語か迷うところです。
[Follow @hi_takaki](http://twitter.com/hi_takaki)
<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>

<div class="booklink-box" style="text-align:left;padding-bottom:20px;font-size:small;/zoom: 1;overflow: hidden;"><div class="booklink-image" style="float:left;margin:0 15px 10px 0;">[![](http://ecx.images-amazon.com/images/I/51wEnN%2B-edL._SL160_.jpg)](http://c.af.moshimo.com/af/c/assignment/external?a_id=146047&p_id=170&pc_id=185&pl_id=4062&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fwww.amazon.co.jp%2Fexec%2Fobidos%2FASIN%2F4777515362%2Fref%3Dnosim)</div><div class="booklink-info" style="line-height:120%;/zoom: 1;overflow: hidden;"><div class="booklink-name" style="margin-bottom:10px;line-height:120%">[公開API活用ガイド (I・O BOOKS)](http://c.af.moshimo.com/af/c/assignment/external?a_id=146047&p_id=170&pc_id=185&pl_id=4062&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fwww.amazon.co.jp%2Fexec%2Fobidos%2FASIN%2F4777515362%2Fref%3Dnosim)<div class="booklink-powered-date" style="font-size:8pt;margin-top:5px;font-family:verdana;line-height:120%">posted with [ヨメレバ](http://yomereba.com)</div></div><div class="booklink-detail" style="margin-bottom:5px;">ZAPA 工学社 2010-08    </div><div class="booklink-link2" style="margin-top:10px;"><div class="shoplinkamazon" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 0 no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[Amazon](http://c.af.moshimo.com/af/c/assignment/external?a_id=146047&p_id=170&pc_id=185&pl_id=4062&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fwww.amazon.co.jp%2Fexec%2Fobidos%2FASIN%2F4777515362%2Fref%3Dnosim "アマゾン")</div><div class="shoplinkrakuten" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -50px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[楽天ブックス](http://c.af.moshimo.com/af/c/assignment/external?a_id=146048&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F6635828%2F "楽天市場")</div><div class="shoplinkseven" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -100px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[7net](http://click.linksynergy.com/fs-bin/click?id=fFgF94Ioje0&subid=&offerid=197738.1&type=10&tmpid=1787&RD_PARM1=http%253A%252F%252Fwww.7netshopping.jp%252Fbooks%252Fsearch_result%252F%253Fctgy%253Dbooks%2526code%253D4777515362 "セブンネットショッピング")</div><div class="shoplinkbk1" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -150px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[bk1![](http://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=2756067&pid=879867541)](http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2756067&pid=879867541&vc_url=http%3A%2F%2Fwww.bk1.jp%2FkeywordSearchResult%2F%3Fkeyword%3D4777515362 "bk1")</div><div class="shoplinkbookoff" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -200px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[ブックオフ](http://click.linksynergy.com/fs-bin/click?id=fFgF94Ioje0&subid=&offerid=169505.1&type=10&tmpid=3677&RD_PARM1=http%253A%252F%252Fwww.bookoffonline.co.jp%252Fdisplay%252FL001%252Cbg%253D12%252Cq%253D9784777515363 "ブックオフオンライン")</div><div class="shoplinkehon" style="margin-right:5px;background: url('http://img.yomereba.com/yl.gif') 0 -250px no-repeat;padding: 2px 0 2px 18px;white-space: nowrap;">[e-hon![](http://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=2756067&pid=879961581)](http://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2756067&pid=879961581&vc_url=http%3A%2F%2Fwww.e-hon.ne.jp%2Fbec%2FSA%2FDetail%3FrefISBN%3D4777515362 "e-hon")</div></div></div></div>