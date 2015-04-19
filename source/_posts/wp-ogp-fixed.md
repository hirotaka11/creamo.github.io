title: "WP-OGPプラグイン最適化して、Facebookからアクセスアップ！"
date: 2011-06-04 15:35:02
tags:
id: 302
categories:
- wordpress
---

以前、[Facebook向けにやっておきたいOGP設定](http://creamo.jp/webtech/wp_for_facebook_ogp/ "Facebook向けにやっておきたいOGP設定")という記事を書きましたが、「WP-OGPプラグイン」にうまく動かない部分があったので、修正点を上げていきます。

### fb:appidをfb:app_idに

まずは単純なミスです。
ただのタイポだと思うのですが、何故更新されないのか不思議なところ。
とりあえず、このままではmeta要素が正常に機能しないので、修正しておきましょう。

WP-OGPプラグイン内の「wp-opg.php」を編集します。

```php
$ogpt_settings = array(
	'fb:admins' =&amp;gt; '',
	'fb:appid' =&amp;gt; '',
[/sourcecode]
[sourcecode lang="php" highlight="”3″"]
function load_wpogp_settings() {
    global $ogpt_settings;
    $ogpt_settings['fb:appid']  = get_option(OGPT_SETTINGS_KEY_FB_APPID);
    $ogpt_settings['fb:admins'] = get_option(OGPT_SETTINGS_KEY_FB_ADMINS);
}
```

上記部分の『fb:appid』を

```php
$ogpt_settings = array(
	'fb:admins' =&amp;gt; '',
	'fb:app_id' =&amp;gt; '',
[/sourcecode]
[sourcecode lang="php" highlight="”3″"]
function load_wpogp_settings() {
    global $ogpt_settings;
    $ogpt_settings['fb:app_id']  = get_option(OGPT_SETTINGS_KEY_FB_APPID);
    $ogpt_settings['fb:admins'] = get_option(OGPT_SETTINGS_KEY_FB_ADMINS);
}
```

『fb:app_id』に。
これで大丈夫です。とりあえずやっておきましょう。

### 「いいね！」「シェア」ボタンを押してサムネイルが表示されない？

OGPが設定されていれば、ウォールにそのページのアイキャッチや使用されている画像がサムネイルとして表示されるはずです。

WP-OGPを見ても
[sourcecode lang="php"]
&amp;lt;meta property=&amp;quot;og:image&amp;quot; content=&amp;quot;アイキャッチ画像のURL&amp;quot; /&amp;gt;
[/sourcecode]
となっているので問題ないはず･･･と思いきや、[Open Graph protocol - Facebook開発者](http://developers.facebook.com/docs/opengraph/ "Link to Open Graph protocol - Facebook開発者")内で

> The image must be at least 50px by 50px and have a maximum aspect ratio of 3:1.

と書かれており、**アスペクト比が3:1以内の画像でないとダメ**なんです。

**このままアイキャッチをサムネイルとして使用する場合**
アイキャッチ画像を設定すていない時、プラグイン内の「dafault.jpg」をサムネイルに使用します。
「default.jpg」の画像を3:1以内の画像に入れ替えておきましょう。

しかし、アイキャッチが3:1以上の横長な画像を使っている人は結構います。
**一番最初にある画像をサムネイルにする**ように設定します。

wp-ogp.php
```php
$image = get_the_post_thumbnail_src(get_the_post_thumbnail($post-&amp;gt;ID));
```
を
```php
$image = get_the_post_thumbnail_src($post-&amp;gt;post_content);
```
に変えればOKです。これでアイキャッチではなく、最初にある画像がサムネイルとして表示されます。

**いや、記事に複数の画像があるんだから選択させてくれ！**
と思う方もいるでしょう。
以下のサイトでマルチサムネイル対応版のWP-OGPを配布しています。
[WP-OGPを改造してマルチサムネイル対応＆正しいプロパティ表記にしました | Sinack](http://sinack.com/wordpress/wp-ogp-multithumb.html "Link to WP-OGPを改造してマルチサムネイル対応＆正しいプロパティ表記にしました | Sinack")

### 抜粋（要約）を記入する

ウォール部分に表示される際、本文も表示されます。
WP-OGPの場合、「抜粋」を記入しない場合は
![抜粋を記入していない場合は本文から適当な部分でカットされる](/wordpress/wp-ogp-fixed/description_sample.jpg "抜粋を記入していない場合は本文から適当な部分でカットされる")
本文を適当な部分でカットし、表示されます。

気にはならないかもしれませんが、抜粋を書くことで見やすくなります。![抜粋を記入した場合](/wordpress/wp-ogp-fixed/description_sample2.jpg "抜粋を記入した場合")

OGP用の「fb:description」と通常の「description」は別の扱いになるので、SEOを考えるなら是非記入しておきたいところです。
通常のdescriptionの記入は「Head Space2」 等のSEOプラグインを導入すれば可能になります。

設定が出来たら以下のページで確認しておきましょう。
[URLリンター - Facebook開発者](https://developers.facebook.com/tools/lint "Link to URLリンター - Facebook開発者")

参考サイト
[小粋空間: プラグイン アーカイブ](http://www.koikikukan.com/archives/cat_143.php "Link to 小粋空間: プラグイン アーカイブ")
[WP-OGPプラグインで出力される画像をアイキャッチ画像から記事内の最初の画像にする方法 - degのはてなダイアリー](http://deg84.com/2011/04/14/wp-ogp-eyecatch/ "Link to WP-OGPプラグインで出力される画像をアイキャッチ画像から記事内の最初の画像にする方法 - degのはてなダイアリー")
[WP-OGPを改造してマルチサムネイル対応＆正しいプロパティ表記にしました | Sinack](http://sinack.com/wordpress/wp-ogp-multithumb.html "Link to WP-OGPを改造してマルチサムネイル対応＆正しいプロパティ表記にしました | Sinack")