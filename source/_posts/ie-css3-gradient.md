title: "[CSS3]今から出来るIE対策 「影とグラデーション編」"
date: 2011-06-08 21:36:54
tags:
id: 353
categories:
  - webtech
---

サイトをHTML5とCSS3に対応させたことによって、IEの表示がおかしくなっていました。
前々から、IEは全く同じデザインにはなってなかったのですが、出来るだけ同じように表示されるよう調整してみます。
<!--more-->

### prototype.jsのエラーの回避

WordPressでLightboxやらのprototype.jsを使うプラグインとjQueryを使用すると、IE8で「prototype.js」のエラーが発生することがあります。
主に投稿画面で発生します。

**WordPress3＋prototype＋jQuery＋IE8＝ヽ(`Д´)ﾉﾄﾞｯｶｧｧｧﾝ!!**

これを回避するにはWindowsアップデート、もしくはIE7互換モードにする必要があります。
症状が出るかは各自テストで確認してください。

互換モードにするには&lt;head&gt;に以下のコードを入れてください。

[sourcecode lang="html"]
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=emulateIE7&quot; /&gt;
[/sourcecode]

参考サイト：[WordPress3.0　続・prototype.jsを使うとIE8で表示が・・・ | ネットインパクト](http://www.netimpact.co.jp/blog/11188/ "Link to WordPress3.0　続・prototype.jsを使うとIE8で表示が・・・ | ネットインパクト")

### IE9はまともにグラデーションに対応していない

**これのせいでIE9が好きになれない！**
CSS3でグラデーションをかけるとします。以下のようなCSSになります。

[sourcecode lang="css"]
background:#fff; /* for non-css3 browsers */
background:linear-gradient(#ffffff, #000000); /* CSS3草案 */
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#000000'); /* IE6,7用 */
-ms-filter: &quot;progid:DXImageTransform.Microsoft.Gradient(StartColorStr=#ffffff, EndColorStr=#000000)&quot;; /* IE8,9用 */
background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#000000)); /* Safari,Google Chrome用 */
background: -moz-linear-gradient(top, #fff, #000000); /* Firefox用 */
[/sourcecode]

長ったらしい上に、何故かIE用にいくつも指定しないといけない。

※稀にwebkitでグラデーションが効かないことがあります。グラデーション構文の順序を変えることで有効になったりします。

本来、CSS3本来のbackground:linear-gradient();で表示されれば解決なんですが、ブラウザ毎に指定する必要があります。
FirefoxとChromeは書けば動くので問題ありません。
もちろん、これだけならばIEでもIE6〜IE9までグラデーションは効きます。

**ただし、IEはグラデーションをfilterで効かせると角丸(border-radius)が効かなくなります。**
box-shadowは丸くなっています。

border-radiusのCSS
[sourcecode lang="css"]
border-radius: 15px; /* CSS3草案 */
-webkit-border-radius: 10px; /* Safari,Google Chrome用 */
-moz-border-radius: 10px; /* Firefox用 */
[/sourcecode]

box-shadowのCSS
[sourcecode lang="css"]
box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.1); /* CSS3草案 */
-webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.1); /* Safari,Google Chrome用 */
-moz-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.1); /* Firefox用 */
[/sourcecode]

border-radiusとbox-shadowに関してはCSS3本来の書き方でIE9で有効になります。

さて、IEでグラデーションと角丸を両方使うにはどうするか？
→border-radiusを諦める or グラデーションを諦める
→少し重くなるが、JavaScriptを使う

諦めるのが一番簡単です。IEだけどちらかを削ったり、IE専用のスタイルを用意します。

### JavaScriptでIE6/7/8をCSS3に対応させる

JavaScriptを使用すれば、IE6,7,8でも角丸が有効になる恩恵があるので、古いブラウザでも同様の表示をさせたいのなら使いましょう。
IEにCSS3を対応させるjsは数多くあります。

以下のページで分かりやすくまとめられていました。
[CSS3が非対応なブラウザでも利用できるようにするツールのまとめ | コリス](http://coliss.com/articles/build-websites/operation/css/css3-compatibility-tools.html "Link to CSS3が非対応なブラウザでも利用できるようにするツールのまとめ | コリス")

私はデモページがあって分かりやすい[CSS3 PIE: CSS3 decorations for IE](http://css3pie.com/ "Link to CSS3 PIE: CSS3 decorations for IE")を使ってみました。

使用方法は以下のページで
[たった一行を追加するだけでIE6/7/8をCSS3対応にする -CSS3 PIE | コリス](http://coliss.com/articles/build-websites/operation/css/css3pie-decorations-for-ie.html "Link to たった一行を追加するだけでIE6/7/8をCSS3対応にする -CSS3 PIE | コリス")

やってみました。[デモページ](http://css3pie.com/ "Link to CSS3 PIE: CSS3 decorations for IE")で作成したものをコピペすればいいです。
実際には2行足すだけですね。
※PIE.htcは絶対パスを入力してください。
[sourcecode lang="css"]
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
-webkit-box-shadow: #666 2px 2px 3px;
-moz-box-shadow: #666 2px 2px 3px;
box-shadow: #666 2px 2px 3px;
background: #ffffff;
background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ffffff), to(#EBEBEB));
background: -moz-linear-gradient(#ffffff, #EBEBEB);
background: linear-gradient(#ffffff, #EBEBEB);

-pie-background: linear-gradient(#ffffff, #EBEBEB);
behavior: url(/PIE.htc);
[/sourcecode]

これでIE6〜IE8も角丸とグラデーションを効かせることが出来ました。

**何故かIE9が出来ない！**

私だけかもしれませんが、IE9だけグラデーションが効きません。
box-shadowとborder-radiusは有効になっています。

IE6,7,8を捨ててIE9を取るか、IE9のグラデーションを捨ててIE6,7,8を取るかの選択になったので、前者を選択しました。

なので、今現在の当サイトのデザインはIE9よりIE7,8の方がグラデーションが掛かって正しく表示されています。
要はIE10になってまともになるのを待つか、Chrome,Firefoxを使って欲しいってことです。

今後も検証していきますが、ご意見いただけると嬉しいです。