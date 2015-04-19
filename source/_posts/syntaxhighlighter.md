title: "ソースコードを表示するSyntaxHighlighterを導入する際の注意点"
date: 2011-06-16 17:18:16
tags:
id: 485
categories:
- wordpress
---

ブログ等でソースコードを整形表示するために使われている鉄板スクリプト"[SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/ "Link to SyntaxHighlighter")"。

WordPressプラグイン化もされており、ソースコードを載せるサイトでは欠かせないものとなっています。

WordPressプラグイン版

[WordPress › SyntaxHighlighter Evolved « WordPress Plugins](http://wordpress.org/extend/plugins/syntaxhighlighter/ "Link to WordPress › SyntaxHighlighter Evolved « WordPress Plugins")

WordPressで使うにはプラグインをインストールするだけで良いと思いきや、カスタマイズを加えるべき部分があります。

今回は、使い方から修正点までをまとめてみました。

### ソースコードを書くときの注意点 - アスキーコード

&lt; &gt; &#91; &#93;などの記号は[アスキーコード](http://www.agr.hokudai.ac.jp/useful/utile/AskCord.htm#pTop)で記述しないとうまく表示されないことがあります。極力アスキーコードを使うようにしてください。

アスキーコードに変換してくれる[preタグ・メーカー](http://www.mapee.jp/tools/pretagmaker/ "Link to preタグ・メーカー")を使う方法もあります。

ただし、**WordPressでSyntaxHighlighter Evolvedを使うときはアスキーコードを意識する必要はありません。**

よって、WordPressで投稿する際はHTMLモードで記述するのがベストです。

下記のコードのようにSyntaxHighlighter書式を表示したい場合は誤変換を防ぐために、&lt;pre&gt;で囲んだ上で [ (&amp;#91;)と ] (&amp;#93;) はアスキーコードで書く必要があります。

このとき&#91; &#93;で囲んでしまうとうまく表示出来ないからです。

### 記述方法

SyntaxHighlighter の書式

```html
<pre class="brush:php";
first-line: 10; /開始行番号指定/
highlight: [2,5]; /強調ライン指定（複数可）/
wrap-lines:false; /自動折返し無し(3.0では折り返し不可)/
auto-links:false; /URLオートリンク無し/
<!—オートリンクOFF,自動折返しOFF—>
<!—改行無し長文テスト。WordPressでjQuery等の外部ファイルを読み込む方法 | CreaMo!〜クリエイティブをMotto!集めるブログ〜 http://creamo.jp/wordpress/jquery-load-wordpress/ -->
ソースコード</pre>
```

SyntaxHighlighter Evolvedの場合は&#91; &#93;で囲んでもOKです。

```
[sourcecode lang="php"
 firstline="10"          /*開始行番号指定*/
 highlight="15,16"       /*強調ライン指定（複数可）*/
 wraplines="false"       /*自動折返し無し(3.0では折り返し不可)*/
 autolinks="false"       /*URLオートリンク無し*/
]ソースコード[/sourcecode]
```

こんな感じにソースコードを括ればOKです。

### 対応言語

*   <span>ActionScript3 (as3, actionscript3)</span>
*   <span>Bash/shell (bash, shell)</span>
*   <span>ColdFusion (cf, coldfusion)</span>
*   <span>C# (c-sharp, csharp)</span>
*   <span>C++ (cpp, c)</span>
*   <span>CSS (css)</span>
*   <span>Delphi (delphi, pas, pascal)</span>
*   <span>Diff (diff, patch)</span>
*   <span>Erlang (erl, erlang)</span>
*   <span>Groovy (groovy)</span>
*   <span>JavaScript (js, jscript, javascript)</span>
*   <span>Java	 (java)</span>
*   <span>JavaFX (jfx, javafx)</span>
*   <span>Perl (perl, pl)</span>
*   <span>PHP (php)</span>
*   <span>Plain Text (plain, text)</span>
*   <span>PowerShell (ps, powershell)</span>
*   <span>Python (py, python)</span>
*   <span>Ruby (rails, ror, ruby)</span>
*   <span>Scala (scala)</span>
*   <span>SQL (sql)</span>
*   <span>Visual Basic (vb, vbnet)</span>
*   <span>XML (xml, xhtml, xslt, html, xhtml)</span>
詳しくは[SyntaxHighlighter - Bundled Brushes](http://alexgorbatchev.com/SyntaxHighlighter/manual/brushes/ "Link to SyntaxHighlighter - Bundled Brushes")を参照してください。

### 2.1系で発生 - 折り返しが有効にならない症状を改善する

折り返しがword wrapなので単語の区切りがない場合は発生するようだ。（長いURLなど）

そこで、以下のように shThemeDefault.css を修正する。ただ、これだとFirefoxで反映されない･･･。

```css
/* First line */
.syntaxhighlighter .line.alt1
{
 background-color: #fff !important;
 word-break: break-all !important;
}

/* Second line */
.syntaxhighlighter .line.alt2
{
 background-color: #F8F8F8 !important;
 word-break: break-all !important;
}
```

### 3.0系で発生 - IE,Chromeの不必要な縦スクロールバーを消す

何故かIE,Chromeで縦は全て表示されているのに縦スクロールバーが常に表示されます。鬱陶しいですよね。

shCoreDefault.css内の.syntaxhighlighterに追記する

```css
.syntaxhighlighter {
  overflow: auto !important;      /*autoであることを確認*/
  overflow-y: hidden !important;  /*追加*/
}
```

### IEで最後の一行が表示されない症状を回避する

IEでは最後の行が表示されません。一行だけの場合は何も表示されなかったりと悲惨です。

shCoreDefault.css内の.syntaxhighlighterに追記する

```css
.syntaxhighlighter table {
  margin-bottom: 1em !important;  /*追加*/
}
```

### タイトルデザインの変更

shCoreDefault.css内の.syntaxhighlighterを書き換えることで行えます。

```css
/*余白部分の修正*/
.syntaxhighlighter table caption {
  text-align: left !important;
  padding: 0 0 0 1em !important;  /*変更*/
}
/*タイトル背景色*/
.syntaxhighlighter table caption {
  color: black !important;
  background-color: #6ce26c !important;  /*追加*/
}
```

### SyntaxHighlighter3.0をさらに掘り下げる

SyntaxHighlighterには機能が豊富過ぎてここでは書ききれません。

SyntaxHighlighter3.0の新機能のさらに詳しい使用方法については以下のサイトで分かりやすく説明されています。

[Linux愛好者の独り言 SyntaxHighlighter 3.0を使いこなす](http://samidarehetima.blog9.fc2.com/blog-entry-85.html "Link to Linux愛好者の独り言 SyntaxHighlighter 3.0を使いこなす")

[【Javascript】SyntaxHighlighter 3.0 の新機能と注意点 - blog.remora.cx](http://blog.remora.cx/2010/07/new-function-of-syntaxhighlighter-3.html "Link to 【Javascript】SyntaxHighlighter 3.0 の新機能と注意点 - blog.remora.cx")

参考サイト

[はなし半分なマトメ。 - SyntaxHighlighter Evolved 導入](http://www.usamimi.info/~hanahan/?p=10 "Link to はなし半分なマトメ。 - SyntaxHighlighter Evolved 導入")

[燕slap釘バット: SyntaxHighlighterで行の折り返し](http://swallowslapspikerod.seesaa.net/article/152521125.html "Link to 燕slap釘バット: SyntaxHighlighterで行の折り返し")