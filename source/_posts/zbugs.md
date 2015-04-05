title: "必見！サイトを圧縮して高速化してくれるWebサービス"
date: 2011-06-04 23:53:58
tags: 高速化
id: 343
categories:
  - webtech
---

サイトのURLを入力するだけで、対象サイトのHTTPリクエスト数の減少数やデータサイズの削減率の数値を表示してくれるWebサービス『zbugs』。

[zbugs - Merge, Minify, and GZip Compress JS &amp; CSS, online tool](http://www.zbugs.com/ "Link to Merge, Minify, and GZip Compress JS &amp; CSS, online tool")

数値の表示だけではなく、圧縮&amp;最適化した後のファイルをダウンロードすることが出来ます。(要ログイン)
<!--more-->
サイトを作成後に高速化を図るのにとても素晴らしいツール。
実際にgzip圧縮する場合は、.htaccessファイルで設定した方がいいですが、自サイトでどれぐらい効果があるものなのかを確認するのには最適だと思います。

最適化ではCSSやJavaScriptをMinify化・複数ファイルの結合みたいなことをしているようです。

左側はオリジナルデータ、中央は最適化データ、右側は最適化後gzip化したデータです。
左側のオリジナルの容量と比べるとずいぶん減ることが分かります。

JavaScriptは最適化すると動かない場合もあるので、随時テストしてください。

<span style="color: #ff0000;">※ドメイン入力で表示されない場合はhttp://から入力してみてください。当サイトはそれで表示出来ました。</span>

参考サイト
[たったワンクリックであらゆるサイトのJavaScriptやCSSを圧縮＆最適化してくれる『zbugs』 | 100SHIKI](http://www.100shiki.com/archives/2011/05/zbugs.html "Link to たったワンクリックであらゆるサイトのJavaScriptやCSSを圧縮＆最適化してくれる『zbugs』 | 100SHIKI")