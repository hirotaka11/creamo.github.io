title: "[WordPress]既存のテーマを使ってHTML5なサイトを極める"
date: 2011-06-01 03:36:21
tags:
id: 255
categories:
- wordpress
---

現在、複数のサイト作成を手がけていて、勉強ついでにHTML5での構築をしています。

HTML5自体はもの凄い難しいわけではありません。
JavaScriptも広い意味でHTML5に含まれているので、簡単だとも言えませんが。

[前回の記事](http://creamo.jp/webtech/html5-easymode/ "[入門編]超簡単にHTML5を書いてみよう")のように、HTML5という宣言をして、divを置き換えて〜とやればHTML5のページにはなります。
<!--more-->

### HTML5化されたテーマファイルを元に作成する

HTML5で書くのはいいですが、WordPressを使用するのなら綺麗なコードで仕上がっているテーマフレームワークを元にオリジナルテーマを作ってみましょう。

WordPressは3.0から「TwentyTen」というテーマがデフォルトになりました。
このテーマはHTML5宣言はしているものの、中身はHTML5とは言い難いものです。

そこで、HTML5化された**「TwentyTen Five」**が作成されました。
こちらのサイトで詳しく紹介されています。
[HTML5完全対応のWordPressのテーマファイル「TwentyTen Five」 | コリス](http://coliss.com/articles/blog/wordpress/wordpress-theme-twentytenfive-used-html5.html "Link to HTML5完全対応のWordPressのテーマファイル「TwentyTen Five」 | コリス")

テーマファイルはこちらのサイトにあります。
[Use HTML5 in WordPress TwentyTen - TwentyTen Five - The HTML5 WordPress theme](http://www.twentytenfive.com/ "Link to Use HTML5 in WordPress TwentyTen - TwentyTen Five - The HTML5 WordPress theme")

**でも、スタイルシートが既にあると作りづらくありませんか？**

そこで、必要なものだけを用意し、レイアウトを組むだけ。
そのようなことに特化した**「Starkers」**のHTML5版がオススメです。

こちらのサイトで詳しく紹介されています。
[WordPressテーマのフレームワーク・StarkersにHTML5版が出たみたいです - かちびと.net](http://kachibito.net/wordpress/starkers-html5.html "Link to WordPressテーマのフレームワーク・StarkersにHTML5版が出たみたいです - かちびと.net")

テーマファイルはこちら
[Starkers HTML5 v3.0 | Nathan Staines](http://nathanstaines.com/archive/starkers-html5-v3 "Link to Starkers HTML5 v3.0 | Nathan Staines")

### テーマのカスタマイズ

さてさて、本題はここからです。
WordPress2のテーマ時代に慣れてしまった私は最低限の作り方しかしてこなかったため、上記のフレームワークテーマをカスタムしようとした際、訳が分かりませんでした。

WordPressテーマを作ったことが無い人はとりあえず、最低限の作り方は覚えておきましょう。

最低限な簡単なテーマ作成はこちらが参考になります。
[Wordpress オリジナルテーマの作り方 3.0+ | Webクリエイターボックス](http://www.webcreatorbox.com/tech/wordpress3-original-theme/ "Link to Wordpress オリジナルテーマの作り方 3.0+ | Webクリエイターボックス")

私が新テーマをカスタマイズしようとして、最初に困ったのは、**loop.php**の存在です。
**「なんなんだお前は！？」**と言いたくなってしまいました。
･･････私だけですか？すいません(´・ω・`)

新しいテーマ構成を把握するにはこちらのスライドが役立ちました。
[新デフォルトテーマ TwentyTen を理解しよう](http://www.slideshare.net/yorozu/about-twentyten-on-wordpress3 "Link to 新デフォルトテーマ TwentyTen を理解しよう")

スライドを読めばそれなりに理解は深まると思います。
これでloop.php等の新しいファイルの意味が分かりましたね。

更に「子テーマ」を活用するとかなり便利になります。
[子テーマ - WordPress Codex 日本語版](http://wpdocs.sourceforge.jp/Child_Themes "Link to 子テーマ - WordPress Codex 日本語版")

使いたいフレームワークテーマはそのままに、カスタムしたいファイルだけ作成することでオリジナルテーマが出来ますね。

また、デフォルトの「TwentyTen」を使う場合はアップデートで上書きされてしまうので、子テーマ作成は必須です。覚えておきましょう。