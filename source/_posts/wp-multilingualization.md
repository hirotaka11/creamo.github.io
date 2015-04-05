title: "WordPressを多言語化させたい！"
date: 2012-12-24 21:41:07
tags:
id: 1142
categories:
- wordpress
---

どうも、色々言われてるソシャゲ系の会社で社畜のように働いてるっぽいhirotakaです。

「[WordPress Advent Calendar 2012](http://2012.wpac.info/)」の**10日目に書くはずだった**記事です。

なんと今日は最終日前日。

参加していただいた皆さんと主催者の方にはご迷惑かけて申し訳ないです。。。(；´Д｀)

ということで、本題です。

最近、多言語化に対応したいという案件が増えてきた気がします。大体は英語 or 中国語対応でしょうか。

さすがグローバル社会です。英語も全然喋れない僕がビクビクしちゃいます。

もしそんな案件で「WordPressを使う」という話なら、簡単に対応することが可能なので紹介していきます。<!--more-->

## 多言語化プラグイン

WordPressには多言語化出来る有名なプラグインが2種類あります。

*   <span>[qTranslate](http://www.qianqin.de/qtranslate/)</span>
*   <span>[WPML](http://wpml.org/ja/)(有料)</span>

私はその中の「qTranslate」を使っていきます。

両プラグインとも使ってみたんですが、無料なqTranslateで事足りてしまっているので、今のところ自分はこれがメインです。

### 注意点

他のプラグインと同様[WordPress.org](http://wordpress.org/extend/plugins/qtranslate/)にあるのですが、管理画面等にも対応する部分が出てくるため、出来るだけ[本家サイト](http://www.qianqin.de/qtranslate/)から今使っているバージョンにあったものを確認しましょう。

また、WordPressがバージョンアップしてから1テンポ遅れて対応されるので、多言語化対応してからプラグイン対応状況を調べずにWordPressをバージョンアップしたりすると、うまくプラグインが動かなくなったりして事故ります。

他のプラグインも同じように確認するとは思いますが、表示に大きく関わってくるので特に注意しておく必要があります。対応バージョンについても[本家サイト](http://www.qianqin.de/qtranslate/)をよく確認しておきましょう。

## qTranslateの設定方法

インストール方法については特に他と変わらないので省略します。

※インストール直後は管理画面が英語化するかもしれませんが、下記の設定画面ですぐに変更できます。

設定画面はこのような感じです。（設定 > Language）
![設定画面](http://creamo.jp/wp/wp-content/uploads/2012/12/qtras_setting.png "qtras_setting.png")

英語ですがそんなに難しいことは書いてません。

●**「Default Language / Order」**

メインで使用する言語と表示順を指定します。ラジオボタンで選択した言語がデフォルト言語として設定されます。

管理画面もこの言語に対応します。そして、上下のボタンで他ページでの表示順を指定します。

●**「Hide Untranslated Content」**

翻訳していないページを表示しないようにする、という設定です。
日本でしか公開しないニュース等もあると思います。チェックしておくことで、投稿記事がリスト表示の際表示されなくなります。

もし、直接リンクへ飛んだとしても（記事表示中に他の言語に切り替えるとか）、本文はこのように表示されている言語へのリンクを表示してくれます。
![Qtrans notrans](http://creamo.jp/wp/wp-content/uploads/2012/12/qtrans_notrans.png "qtrans_notrans.png")

●**「Detect the language of the browser and redirect accordingly」**

ブラウザの言語設定を読み込んで、表示言語ページヘリダイレクトします。

◯**「Advanced Setting」**も少しだけ設定します。

●**「URL Modification Mode」**

言語切替のURLの表記方法です。状況に合わせて使い分ければよいかと。

*   <span>?lang=en （クエリー形式）</span>
*   <span>http://addless/en/ （サブディレクトリ階層形式）</span>
*   <span>http://en.addless.com　（サブドメイン形式）</span>

ラジオボタンの下に下記のチェックボックスがあると思います。

●**「Hide URL language information for default language」**

ディレクトリ、サブドメイン形式のとき、デフォルト言語は言語情報を付加しないurlで表示するかという設定です。

最後に下の方にある国旗が並んだテーブルで使用するかしないかの設定をします。

Enableで有効、Disableが無効です。

もし、追加したい言語がない場合は**「Add Language」**から追加しましょう。

### 言語切替の表示方法

言語切替するリンクの表示方法を設定します。

「text」「image」「both」「dropdown」から選択可能です。

dropdown形式で表示したい場合は下記のようにテンプレートに書きます。

[php]&lt;?php if(function_exists('qtrans_generateLanguageSelectCode')) {
  //	国旗は(’image’)、テキストは(’text’)、両方表示は(’both’)を使用
  qtrans_generateLanguageSelectCode('dropdown'); 
} ?&gt;[/php]

### 他言語での記事投稿

設定さえ終わってしまえばあとは簡単です。投稿画面を表示します。

設定した言語がタイトルと本文で言語別に入力できるようになりました。
![Qtrans post](http://creamo.jp/wp/wp-content/uploads/2012/12/qtrans_post.png "qtrans_post.png")

### META description の設定

せっかくページを多言語化しても、descriptionも言語別に設定できないと意味無いですよね。

私は「抜粋」をdescriptionを入れるようにしており、ここも言語別に入力可能になっています。
![Description](http://creamo.jp/wp/wp-content/uploads/2012/12/description.jpg "description.jpg")

### メニューの設定

現時点で、メニューページのナビゲーションラベルは分割されていません。

そういう時はどうするのか？

実は言語切替はこのようにタグに入れられて言語別に管理されています。入力フォームが別れてない場合はこれで言語別に入力することが可能です。

（表示の関係、記号を全角にしてます）

> ＜!--:ja--＞採用エントリー＜!--:--＞＜!--:en--＞Jobs Entry＜!--:--＞＜!--:zh--＞收養申請＜!--:--＞＜!--:id--＞Awal Pekerjaan＜!--:--＞＜!--:th--＞ช่องทางสมัครงาน＜!--:--＞

どの言語がどういう値で管理されているかは、先程の設定画面の言語のEditページで確認できます。

![Qtrans edit language](http://creamo.jp/wp/wp-content/uploads/2012/12/qtrans_edit_language.jpg "qtrans_edit_language.jpg")

### テンプレート内での言語別表示方法

テンプレート内で言語別に表示したいものがある場合はこのようにqTranslate側で用意された関数を使うことで切り分けが出来ます。
その代わりqTranslateに依存したテンプレートになってしまうので注意が必要です。phpの「[function_exists](http://php.net/manual/ja/function.function-exists.php)」関数を使って依存回避するのも手です。

[php]
&lt;?php 
	if (qtrans_getLanguage() == 'ja') {
	    echo &quot;お知らせ&quot;;
	} elseif (qtrans_getLanguage() == 'en')  {
	    echo &quot;NEWS&quot;;
	} elseif (qtrans_getLanguage() == 'zh')  {
	    echo &quot;最新動態&quot;;
	}
?&gt;
[/php]

こんな書き方もできます。
[php]&lt;?php _e(&quot;＜!--:ja--＞お知らせ＜!--:--＞＜!--:en--＞NEWS＜!--:--＞&quot;; ?&gt;[/php]
[php]&lt;?php _e(&quot;[:ja]お知らせ[:en]NEWS&quot;); ?&gt;[/php]

他にも表示中の言語にurlを変換する **qtrans_convertURL()**関数などがあります。

qTranslate用の関数は下記ページに纏められてます。
[qTranslate Forum • View topic - Functions for Developers and Template Authors](http://www.qianqin.de/qtranslate/forum/viewtopic.php?f=3&t=9)

### 日付の表示がおかしい場合の対処

環境によって起こったり起こらなかったりするのでなんとも言えないところなのですが、qTranslateが原因の場合は**「設定 > Language > (言語)Edit」**で、表示方法を指定できます。

もしくは、**the_date(), the_time(), get_post_time()**等の関数をそれぞれ試してみるというのも手です。
![Qtrans date](http://creamo.jp/wp/wp-content/uploads/2012/12/qtrans_date.png "qtrans_date.png")

まだまだ状況によっては足りないことがあるかもしれませんが、このような手順でWordPressサイトを多言語化対応させることが出来ます。

自分のサイトも英語対応させてみたいと持った方はぜひ！

そのためには英語がある程度書ける必要がありますが･･･ｗ