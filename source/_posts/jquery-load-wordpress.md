title: "WordPressでjQuery等の外部ファイルを読み込む方法"
date: 2011-06-15 08:30:48
tags:
id: 474
categories:
- wordpress
---

通常HTMLにjQueryを読み込む際は以下のように読み込むと思います。

```html
<script type="text/javascript"src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
```

ところがWordPressでは各種プラグインが様々なJavaScriptのフレームワークを使うので、コンフリクト（競合）の発生を防ぐために内部で色々と処理が行われています。
そのため、上記のように読み込むとうまく動作しない可能性があります。

コンフリクトを起こさないためにも、WordPressでjQuery等の外部ファイルを読み込む時にはwp_enqueue_script()という関数を使う必要があります。

### 関数の呼び出し方

[Function Reference/wp enqueue script « WordPress Codex](http://codex.wordpress.org/Function_Reference/wp_enqueue_script "Link to Function Reference/wp enqueue script « WordPress Codex")

```php
wp_enqueue_script( $handle, $src = false, $deps = array(), $ver = false );
```

**$handle**

スクリプトの識別名

**$src(optional)**

スクリプトファイルへのパス。http:// で始まるURLまたはサイトルートから絶対パス。

**$deps(optional)**

依存するスクリプトのリスト（配列）

**$ver(optional)**

スクリプトのバージョン

### WordPressに読み込ませる

WordPressはjQueryを内蔵しているので、公式サイトからダウンロードしてくる必要はありません。

基本的に、下記コードを&lt;head&gt;内に読み込ませます。

**また、function.phpやプラグインにwp_enqueue_script()を書き込むことも可能です。**

下記コードはWordPressに含まれるjQueryを使用した例です。Google APIから読み込む場合は後述します。
&lt;head&gt;内に書く場合は必ず&lt;?php wp_head(); ?&gt;の前に記述してください。

```php
<?php
wp_enqueue_script('jquery'); 
wp_enqueue_script('sample','/wp-content/themes/yourthemes/js/sample.js',array('jquery'),'0.1.0');
?>
<?php wp_head(); ?>
```

1行目でWordPress内蔵のjQueryを読み込んでいます。

2行目は自前のjsの読み込みですね。

先述したとおり、WordPressはコンフリクトを防ぐためにグローバル変数を変更しており、**$の代わりにjQueryを使用しています**。

自前のjsのソースを$→jQueryに置換しておきましょう。

修正が面倒な場合は自前のfunctionだけ$でアクセス出来るように下記コードで括ります。

```php
jQuery(document).ready(function($) {
 //下のfunction内だけ$が有効
 $(document).ready(function() {
  alert("サンプルコード");
 }); 
});
```

### WordPressにデフォルトで含まれているjQueryライブラリ

> scriptaculous-root, scriptaculous-builder, scriptaculous-dragdrop, scriptaculous-effects, scriptaculous-slider, scriptaculous-sound, scriptaculous-controls, scriptaculous, Image cropper (not used in core, see jcrop), Image copper, swfobject, swfupload, swfupload-degrade, swfupload-queue, swfupload-handlers, jquery, jquery-form, jquery-color, jquery-ui-core, jquery-ui-tabs, jquery-ui-sortable, jquery-ui-draggable, jquery-ui-droppable, jquery-ui-selectable, jquery-ui-resizable, jquery-ui-dialog, schedule, suggest, thickbox, jquery-hotkeys, sack, quicktags, farbtastic, colorpicker, tiny_mce, prototype, autosave, wp-ajax-response, wp-lists, common, editor, editor-functions, ajaxcat, admin-categories, admin-tags, admin-custom-fields, password-strength-meter, admin-comments, admin-users, admin-forms, xfn, upload, postbox, slug, post, page, link, comment, admin-gallery, media-upload, admin-widgets, word-count, theme-preview, json2

### Google AJAX APIを使用して最新版のjQueryを読み込む

jQueryの読み込みだけでもロード時間の増加に繋がっている、かもしれません。

なのでGoogle AJAX Libraries APIのキャッシュを使うことで負担軽減に繋げてみましょう。

他のサイトでキャッシュが作られているかもしれないですからね。

別のメリットとして常に最新版が取得することが出来ます。

以下のコードのように記述します。

```php
wp_deregister_script( 'jquery' );
wp_deregister_script( 'jquery-ui-core' ); //jQuery 
```
UIを使わない場合は不要

```php
wp_enqueue_script('jquery','http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js');
wp_enqueue_script('jquery-ui-core','http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js', array('jquery'));
/* 以下、その他のjQueryプラグインの読み込み */
```

”wp_deregister_script()”でWordPress標準のjQueryの読み込みをキャンセルしてから読み込ませます。

ここで2重読み込みを防ぎ、他のjQueryのプラグインは全てGoogle APIに依存させます。

<code>“http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js”</code>の“/1/”の部分は**”最新バージョンを読み込む”**という意味です。

最新バージョンで不具合がある場合は、この部分にバージョン数字を入れることで好きなバージョンを読み込むことが出来ます。
例)1.2.3、1.2.6、1.3.0、1.3.1など

**“min”を抜かせばパッケージ版ではなくフルバージョン**の読み込みになります。

--

WordPressでのjQueryの扱いは誰もが一度は引っかかってしまう難関ですね。

私も最初普通に読み込もうとして悩みました。
私はfunction.phpに書いていますが、header.phpとどっちに書くのが理想なんでしょうかねぇ。

参考サイト

[Function Reference/wp enqueue script « WordPress Codex](http://codex.wordpress.org/Function_Reference/wp_enqueue_script "Link to Function Reference/wp enqueue script « WordPress Codex")
[WordPressではじめてのjQueryが動かないという人へ スライドショー レビューも兼ねて](http://webdesignrecipes.com/anythingslider-in-wordpress-with-jquery/ "Link to WordPressではじめてのjQueryが動かないという人へ スライドショー レビューも兼ねて")

[wp_enqueue_scriptで外部のjQueryライブラリを使う | Shifft – Web Design &amp; Development](http://www.shifft.in/blog/wordpress/using-wp_enqueue_script/ "Link to wp_enqueue_scriptで外部のjQueryライブラリを使う | Shifft – Web Design &amp; Development")

[WordPressにおけるjQueryの仕様について | wembley](http://www.wembley.jp/webdevelop/jquery-in-wordpress.html "Link to WordPressにおけるjQueryの仕様について | wembley")

[WordPressでGoogle AJAX APIからjQueryを読み込む | wembley](http://www.wembley.jp/webdevelop/googleapi-to-wordpress.html "Link to WordPressでGoogle AJAX APIからjQueryを読み込む | wembley")