title: "AndroidのブラウザはSafari？スマホのUser-Agentを見てみよう！"
date: 2011-05-17 19:08:21
tags:
id: 94
categories:
 - webtech
---

Google Analyticsを見ていて、ふと気づいた。

**AndroidのブラウザがSafariになっている･･･。**
<!--more-->
[![](http://creamo.jp/wp/wp-content/uploads/2011/05/os_browser.jpg "OS/ブラウザ")](http://creamo.jp/wp/wp-content/uploads/2011/05/os_browser.jpg)

確かにAppleのSafariとGoogleのChromeは同じWebKitエンジンで作られていて、現在はGoogle管理の下、オープンソースとして公開されている。
そもそもWebKit自体がMacOSX用に開発されたものなので、そうなる理由は分からなくもない。
しかし、PC/Mac用はきちんとChromeとSafariで分けられている。

iPhoneの主に使われるブラウザは「Mobile Safari」だ。
Androidの内蔵ブラウザは「Chrome Lite」とか呼ばれているが正式名称はない。
なのでSafariと区分されてしまっているのだろうか。
SafariとAndroidの表示違いは結構あるはずなのだが･･･。

この問題の一番の突っ込みどころは、GoogleのサービスなのにSafariという一つの枠にしていることである。
さらに、OS無視でブラウザのみの統計を見るとSafariの使用率が多くなる。
･･･あれ？Appleさんの戦略ですか？

**自分のサービスですよGoogleさん。自社のブラウザならアピールしましょうよｗ**

ということで、今回OSとブラウザを通知しているUser-Agentを調べてみることにしました。
調べたのは主にWebkit使用ブラウザ。意外と面白いことが分かります。

**以下User-Agent一覧**

**Windows XP/Chrome**
Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.2

**Mac/****Chrome
**Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/13.0.761.0 Safari/534.35

**Mac/Safari**
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; ja-jp) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1

なんでしょう･･･**Apple WebKit**って入れないといけないんでしょうかねぇ。
WebKitの起源がMac OS X用なので、こういう制約が出来たのかもしれません。
なんにしても、ブラウザ名はきちんとChrome/Safariで分けられています。問題ありません。

それではスマートフォンの方を見てみましょう。

**iPhone**

**Safari**
Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5

**Skyfire**
Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8J2

&nbsp;

**Android**

**Xperia X10(SO-01B)内蔵ブラウザ**

Mozilla/5.0 (Linux; U; Android 2.1-update1; ja- jp; SonyEricssonSO-01B Build/2.0.1.B.0.19) AppleWebKit/530.17 (KHTML, like Gecko) Version/ 4.0 Mobile Safari/530.17

**Dolphin Browser**
Mozilla/5.0 (Linux; U; Android 2.1- update1; ja-jp; SO-01B Build/ 2.0.1.B.0.19) AppleWebKit/530.17(KHTML, like Gecko) Version/4.0 Mob(KHTML, like Gecko) Version/4.0 Mob Safari/530.17

**Dolphin Mini**
Mozilla/5.0 (Linux; U; Android 2.1- update1; ja-jp; SO-01B Build/ 2.0.1.B.0.19) AppleWebKit/530.17(KHTML, like Gecko) Version/4.0 Mobile(KHTML, like Gecko) Version/4.0 Mobile Safari/530.17

**Opera Mobile**
Opera/9.80 (Android 2.1-update1; Linux; Opera Mobi/ADR-1104201100; U; en) Presto/2.7.81 Version/11.00

**Opera Mini**
Opera/9.80(Android;OperaMini/6.0.24556/24.838;U;ja)Presto/2.5.25 Version/10.54

**Skyfire**
Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/530.1(KHTML, like Gecko) Version/4.0(KHTML, like Gecko) Version/4.0 Safari/530.17 Skyfire/2.0

**Firefox**
Mozilla/5.0 (Android; Linux armv71; rv:2.1.1) Gecko/20110415 Firefox/4.0.2pre Fennec/4.0.1

分かると思いますが、Androidがカオスですｗ

iPhoneと違ってブラウザの制約があまりないので、ブラウザが乱立しています。

Android内蔵の標準ブラウザ、Androidで使用率の高いDolphinブラウザはiPhoneと同じ**Mobile Safari**になっています。
通りで、AndroidブラウザがSafariになるわけです。Google側は変えるつもりはないんでしょうか。

SkyfireはMac扱いなので、スマホ専用サイトは閲覧不可です。

困るのはOperaですね。スマホ専用サイトは無理ですし。WordPressプラグインの"Ktai Style"を入れているとガラケー用のサイトが表示されます。とは言ってもOpera指定の回避方法が分からないのですけど。

Android版Firefoxはまだまだ実用的な段階ではないので無視して良いと思います。最新のスマホならキビキビ動くかもしれませんが、私のXperiaでは反応が遅すぎて使い物になりません。

User-Agentを通して、GoogleのAndroidブラウザに対する姿勢が気になりますね。あまり純正ブラウザにこだわっていないのでしょうか。
