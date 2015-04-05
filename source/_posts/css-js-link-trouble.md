title: "なぜ！？CSS,JavaScriptなどの外部ファイルが読み込まれない原因"
date: 2011-05-01 01:50:46
tags:
id: 42
categories:
  - webtech
---

昨日、たまたま更新してないiPad(iOS3)と古いMacbook(Safari4)を触る機会があって、どうせならとこのサイトを試しに表示してみました。

**なんとCSSが適用されていない！**

自分の環境だと全て表示されていたので驚きました。
試していた環境は
・Safari5
・Chrome 12
・Firefox4
・IE8,IE9

これらではCSSを読み込めているのに読み込まれていないブラウザがある。
最初は訳が分かりませんでした。
<!--more-->
もっと試してみると、どうやらiOS3だとiPhoneもダメで、Androidもダメでした。
スマートフォン用のプラグイン(WPTouch)を既に当てていたので、気づきませんでした。

とりあえず試してダメだった環境は
・iOS3のiPhone、iPad
・Safari4
・IE7
・Androidブラウザ(Dolphin系のみテスト)

色々探して、まさにこの状況を打破する記事を発見しました。
[メモ: .css、.jsなどの外部ファイルが正常に読み込まれないとき](http://hcondo2000.blogspot.com/2010/12/cssjs.html "Link to メモ: .css、.jsなどの外部ファイルが正常に読み込まれないとき")

原因としては読み込み先のCSSの文字コード指定が最初の行になかったことでした。

普段は一番上に書いているのですが、こんかい初めてWordPressでテーマを作ったので、テーマ用の説明文を一番上に書いていたんですね。

style.css
[sourcecode lang="css"]
/*
Theme Name: CreaMo!
Theme URI: http://creamo.firebird.jp/
Description: CreaMo!初期テーマ
Version: 00
Author: hirotaka
Author URI: http://creamo.firebird.jp/
*/
@charset &quot;UTF-8&quot;;
@import url(&quot;./css/header.css&quot;);
@import url(&quot;./css/base.css&quot;);
[/sourcecode]

こうなってたわけです。
テーマの説明文を一番上に書くということが頭にあったので、このように書いていました。
ちゃんと考えれば、文字コード指定を一番最初にしないとコメントもちゃんと読んでくれないですよね。

なので
[sourcecode lang="css"]
@charset &quot;UTF-8&quot;;
/*
Theme Name: CreaMo!
Theme URI: http://creamo.firebird.jp/
Description: CreaMo!初期テーマ
Version: 00
Author: hirotaka
Author URI: http://creamo.firebird.jp/
*/
@import url(&quot;./css/header.css&quot;);
@import url(&quot;./css/base.css&quot;);
[/sourcecode]

文字コード指定を一番上に持ってくることで、この問題は解決しました。

当たり前のことかもしれませんが、CSSを初めて書いた人や私のようにWordPressテーマを初めて作った人はやってしまうかもしれませんね。

IE6は無視して良いかなとは考えていますが、さすがにAndroidやiPadで読めないのは問題ありますからね。

気をつけましょう。