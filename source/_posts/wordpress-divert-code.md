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

```
<?php 
function snsBtn()
{ ?>
<ul class="sns-button">
<!— はてなブックマーク —>
<li class="hatenaBtn"><a href="http://b.hatena.ne.jp/entry/<?php the_permalink() ?>" class="hatena-bookmark-button" data-hatena-bookmark-title="<?php the_title() ?>" data-hatena-bookmark-layout="standard" title="このエントリーをはてなブックマークに追加"><img src="http://b.st-hatena.com/images/entry-button/button-only.gif&quot; alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a></li>
<!— Twitter —>
<li class="twitterBtn"><a href="http://twitter.com/share&quot; class="twitter-share-button" data-count="horizontal" data-lang="ja">Tweet</a></li>
<!— Facebook —>
<li class="fbBtn"><iframe src="http://www.facebook.com/plugins/like.php?href=<?php the_permalink() ?>&amp;layout=button_count&amp;show_faces=false&amp;width=100&amp;action=like&amp;colorscheme=light&amp;height=20" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:20px;" allowTransparency="true"></iframe></li>
<!— +1 —>
<li class="p1Btn"><g:plusone size="medium" href="<?php the_permalink() ?>"></g:plusone></li>
<!— Evernote —>
<li class="evBtn"><a href="#" onclick="Evernote.doClip({}); return false;"><img src="http://static.evernote.com/article-clipper-jp.png&quot; alt="Clip to Evernote" /></a></li>
</ul><!— sns-button —>
<?php }
?>
```

**読み込みを早くするためにソーシャルボタン用のJavaScriptはフッターで読み込ませます。**
以下をフッターのwp_footer();の下にコピペ

```html
<!— snsBtn用script —>
<script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js&quot; charset="utf-8" async="async"></script> <!— はてなブックマーク —>
<script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script&gt; <!— Twitter —>
<script type="text/javascript" src="http://static.evernote.com/noteit.js"></script&gt; <!— Evernote —>
<script type="text/javascript" src="http://apis.google.com/js/plusone.js">{lang: ‘ja’}</script> <!— +1 —>
<!— /snsBtn用script —>
```

### テーマファイルの表示したい場所に以下のコードを貼り付ける

```php
<?php snsBtn(); ?>
```

これだけです。とても簡単にコードの使い回しが出来ます。

snsBtn();の名前を変えるだけで何個も作れますね。

PHPのinclude関数を使えば使い回しは出来ますが、PHPファイルは最小限にしたいですし、せっかくのテーマファイルなのでfunction.phpに書くのがベストだと思います。

ソーシャルボタンのコードは以下のサイトで簡単に作れます
[ブログ・サイトに貼る主要ソーシャルサービスのボタンソースジェネレータ :: 5509](http://5509.me/log/social-service-buttons-generator "Link to ブログ・サイトに貼る主要ソーシャルサービスのボタンソースジェネレータ :: 5509")

テーマファイルがとても見やすくなるので使わない手はありませんね。

参考サイト

[WordPress にはてブと Twitter と Facebook のボタンを10秒で貼り付けられるコードを書いてみたよ | ウェブル](http://weble.org/2010/11/26/wordpress-social-button "Link to WordPress にはてブと Twitter と Facebook のボタンを10秒で貼り付けられるコードを書いてみたよ | ウェブル")