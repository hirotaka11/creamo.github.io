title: "Mac OS X Lion の疑問点解消のまとめ"
date: 2011-07-29 12:46:10
tags:
id: 866
categories:
  - tool
---

Mac OSX 10.7 Lionがリリースされましたが、同時にMacBookAirも新しくなり、Macデビューの人が増えているようで嬉しい限りです。

しかし、今回のアップデートはなかなか新しい機能が多く、今までMacを触っていた人でも少々戸惑ってしまうことも多いです。

今回は、Lionにアップデートされた方、新しくMacデビューする方にぜひ知っておいてほしい、設定等の方法を紹介していきます。出来るだけ画像つきで分かりやすくしました。<!--more-->
<span style="color: #ff0000;">7/29 17:30 スクロール方向設定内容を追記しました</span>

<div class="amz-etr-under"><div class="amz-left" style="float:left;"><div class="amz-image">[![](http://a2.mzstatic.com/us/r1000/083/Purple/00/00/00/lion.60x60-50.png)](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fos-x-lion%252Fid444303913%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30)</div></div><div class="amz-right"><div class="amz-title">[OS X Lion](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fos-x-lion%252Fid444303913%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30) [![OS X Lion - Apple®](http://ax.phobos.apple.com.edgesuite.net/ja_jp/images/web/linkmaker/badge_macappstore-sm.gif)](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fos-x-lion%252Fid444303913%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30)</div><div class="amz-detail">価格: ¥2,600 (記事公開時)
カテゴリ: 仕事効率化
[App Storeで詳細を見る。](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fos-x-lion%252Fid444303913%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30)</div></div></div>

Lionにアップデートして数日経ちましたが、Lionはノートユーザー向けにかなり改良されており、トラックパッドでの操作を前提に作られている感があります。

Expose&amp;Spacesを使いこなしてた人や、iMacや外部ディスプレイ出力してマルチディスプレイ環境の人にとっては改悪と思われるものもあります。

既存のSnow LeopardユーザーはTime Machineで既存の環境に戻せる準備をしてからのアップデートをお勧めします。

*   [【重要】アップデートする前にチェックすること](#h3-1)
*   [インストール前にリカバリーディスクを作る](#h3-2)
*   [逆になったスクロール方向を変更する](#h3-3)
*   [Mission Controlってなに？](#h3-4)
*   [Lanchpadってなに？](#h3-5)
*   [Mission Controlの順序が変わらないようにしたい](#h3-6)
*   [Exposeのように各画面にアプリを割り当てたい](#h3-7)
*   [インストール後の動作遅い or ファンが回りすぎ or CPU使用率が高すぎるとき](#h3-8)
*   [フルスクリーンモードについて](#h3-9)
*   [三本指での「戻る/進む」が使えない or 三本指操作をするとクラッシュする](#h3-10)
*   [ホームのライブラリフォルダにアクセスするには？](#h3-11)
*   [Xcodeが動かない](#h3-12)
*   [右上のユーザー名を消したい](#h3-13)
*   [マイファイルに発見されたくないファイルがある](#h3-14)
*   [以前とフォントが変わった気がする](#h3-15)
*   [クリーンインストールの方法](#h3-16)
*   [絵文字入力をしたい](#h3-17)
*   [Finderでファイルの移動が可能に](#h3-18)
*   [再起動時の「再開」機能をオフにする](#h3-19)
*   [Finderのサイドバーの文字が大きい](#h3-20)
*   [参考サイト](#h3-21)

### 【重要】アップデートする前にチェックすること

一度アップデートしてしまうとダウングレードすることが出来ません。普段使っているアプリが使えなくなってしまう自体が引き起こった後では遅いです。

今回は大幅な変更があるので、アップデート前にしっかりとチェックしておきましょう。

・**動かないアプリの確認**

Lionが公開されてからある程度日数が経っているので、動作しないアプリの情報が出ています。確認しておきましょう。

[Macの新しいOS『OS X Lion』で動かないアプリまとめ | デジタルマガジン](http://digimaga.net/2011/07/os-x-lion-not-support-app-matome "Link to Macの新しいOS『OS X Lion』で動かないアプリまとめ | デジタルマガジン")

[各メーカーの OS X Lion 対応情報のまとめ、およびリンク集 － MACお宝鑑定団 blog（羅針盤）](http://www.macotakara.jp/blog/index.php?ID=13547 "Link to 各メーカーの OS X Lion 対応情報のまとめ、およびリンク集 － MACお宝鑑定団 blog（羅針盤）")

Adobe系ソフトでは最新版のCS5.5でも多少問題が発生しています。とは言っても大抵の機能は使えるので、それを承知でアップデートするか、最新版を待つしかありません。

### インストール前にリカバリーディスクを作る

Lionではインストール時にHDDに「Recovery HD」というパーティションを作成し、再インストールやディスクユーティリティーが使用出来るようになっています。

しかし、これではHDDがクラッシュした場合に対処出来ません。

8月後半にUSBメモリ版が販売されるらしいですが、リカバリーディスクを作っておくことに損はないです。

**※出来るだけインストール前に作成しましょう**

**※Lionをインストールしてしまい、インストーラが消えてしまった場合**

Mac App Storeを起動し、「OS X Lion」の画面に移動します。

[option]キーを押しながらLionのアイコンをクリックすることで、「インストール済み」から「インストール」に表記が変わり、再び「Mac OS X Lion インストール.app」をダウンロードすることが出来るようになります。

**リカバリーディスク作成手順**

1\. Lionのインストーラーを右クリックし「パッケージの内容を表示」を選択

2\. 「ShareSupport」というフォルダの中の「InstallESD.dmg」ファイルを別の場所にコピー

3\.  「InstallESD.dmg」を右クリックして「"InstallESD.dmg"のディスクを作成」をクリック

　もしくは「ディスクユーティリティ」を起動して「ディスクを作成」から「InstallESD.dmg」を選択

![「InstallESD.dmgのディスクを作成」](http://creamo.jp/wp/wp-content/uploads/2011/07/lion-disc.png "「InstallESD.dmgのディスクを作成」")

**・USBメモリで起動ディスクを作成**

※USBメモリ起動ディスクからクリーンインストールを行うと「Recovery HD」が作成されません。

Lionの簡単クリーンインストール機能を使いたい場合はUSBメモリからのクリーンインストールは避けた方が良さそうです。

USB起動ディスクの作成手順は以下のサイトを参照してください。

[DVDやUSBメモリでつくる、OS X Lion（Mac OS 10.7）の起動ディスクのつくりかた。 (「・ω・)「がおー - オレンヂ](http://orangeorange.jp/archives/17427)

### 逆になったスクロール方向を変更する

ある意味一番大きな変更は、スクロール方向が逆になったことです。

これはMacをよりiOS寄りにするために、iOSと同様の挙動になりました。

最初は戸惑いますが、タッチパネルのように「なぞる」ことを意識するとそう不思議ではありません。むしろこっちが自然な挙動なのかもしれません。

とは言っても、慣れない方はいらっしゃるでしょうし、マウスも逆になっているのでマウス派の人は混乱してしまいます。スクロール方向は設定で簡単に変更できます。

「システム環境設定」→「マウス」の「スクロールまたは移動するときに、コンテンツを指を動かした方向に移動させる」のチェックを外すと今まで通りのスクロール方向に。

![Scroll mouse](http://creamo.jp/wp/wp-content/uploads/2011/07/scroll-mouse.png "scroll-mouse.png")

「システム環境設定」→「トラックパッド」の「スクロールの方向：ナチュラル」のチェックを外すと今まで通りのスクロール方向に。

![Scroll pad](http://creamo.jp/wp/wp-content/uploads/2011/07/scroll-pad.png "scroll-pad.png")

Appleは新しいスクロール方向のことを**「ナチュラル」**と呼んでいます。

「マウス」「トラックパッド」のそれぞれの設定に項目がありますが、両方がリンクしており、マウスとトラックパッドを異なる設定にすることが出来ません。

私は異なる設定で使いたいと思っていたので、これを知った時ガッカリしました。わざわざ設定項目がそれぞれあるので、それぞれの設定が独立するようフィードバックを送りました。

私と同志の方はぜひフィードバックをしてやってください。

### Mission Controlってなに？

![Mission Control](http://creamo.jp/wp/wp-content/uploads/2011/07/mission-control.png "Mission Controlの画面")

ExposeとSpacesが統合された機能です。

Exposeがウィンドウを整列させる機能。Spacesが仮想デスクトップ機能です。

Exposeと違ってアプリごとに分けられるので、一つのアプリで複数ウィンドウを開いていた人には不便かも。そのために「アプリケーションExpose」は残っています。

また、Spacesを使いこなしていた人には使いづらくなっているかもしれません。

私も最初は戸惑いましたが、使い方を変えてみるとある程度慣れることが出来ました。Mission ControlがSpacesより重くなっていることは否定できません。

**Mission Controlを使うコツ**

*   <span>Optionボタンを押しながら他のデスクトップを選択するとMission Controlを維持しながら画面を切り替え出来る</span>
*   <span>画面右上の「+印」でデスクトップ数を増やす</span>
*   <span>上部デスクトップの左上部分にカーソルを持っていくか、Optionキーを上部デスクトップ上で押すことで「×印」が表示され、デスクトップ数を減らせる</span>
*   <span>Spacesとは異なり、フルスクリーン機能と使い分けて臨機応変にデスクトップ数を変化させる</span>
*   <span>ウィンドウをドラッグして、上部デスクトップにドロップして割り当てる</span>
*   <span>ウィンドウをドラッグして、右上の「+印」にドロップでウィンドウを割り当てる</span>
*   <span>複数のウィンドウが重なっているとき、カーソルオーバーしてるウィンドウをスペースで拡大</span>
*   <span>[Control]+[数字キー]のショートカットを活用する</span>

これを覚えるだけでかなり使えるようになるはずです。

### Lanchpadってなに？

![Lanchpad](http://creamo.jp/wp/wp-content/uploads/2011/07/lanchpad-1.png "Lanchpadの画面")

簡単に言えば、アプリケーションにiOSのようなインターフェースでアクセス出来る画面です。

![アプリをまとめることが可能](http://creamo.jp/wp/wp-content/uploads/2011/07/lanchpad-2.png "アプリをまとめることが可能")

iOSと同じく、アプリケーションをまとめることが出来ます。

ここでアプリをまとめても「アプリケーション」フォルダには反映されません。

**Lanchpadを使わなくても･･･**

![アプリケーションフォルダをグリッド表示](http://creamo.jp/wp/wp-content/uploads/2011/07/app-grid.png "アプリケーションフォルダをグリッド表示")

既存Macユーザーの方は使っていたと思うのですが、Dockにアプリケーションフォルダを置いて、グリッド表示した方が楽な気がします。

![「グリッド」を選択](http://creamo.jp/wp/wp-content/uploads/2011/07/app-grid2.png "「グリッド」を選択")

**手順**

1.「アプリケーション」フォルダをDockに追加

2\. 右クリックで「グリッド」を選択する

どちらが使いやすいかは一概に言えないので、各自試してみてください。

### Mission Controlの順序が変わらないようにしたい

Mission Controlはデスクトップの使用状況を監視して、よく使うデスクトップを近くにまとめます。なので、使っているうちにデスクトップの順番が変わっていて使いづらい人もいるはずです。

この機能を切るには「システム環境設定」→「Mission Control」→「最新の使用状況に基づいて操作スペースを自動的に並べ替える」のチェックを外します。

![Mission Control並び替えをオフ](http://creamo.jp/wp/wp-content/uploads/2011/07/mission-control-sort.png "「最新の使用状況に基づいて操作スペースを自動的に並べ替える」のチェックを外す")

### Exposeのように各デスクトップにアプリを割り当てたい

Spacesでは「システム環境設定」で各デスクトップにアプリを割り当てることが出来ましたが、Mission ControlではDockから割り当てることが出来ます。

挙動はSpacesと同じです。[Control]+[数字キー]のショートカットを使いこなしましょう。
![デスクトップにアプリを割り当てる](http://creamo.jp/wp/wp-content/uploads/2011/07/app_desktop.png "デスクトップにアプリを割り当てる")

### インストール後の動作遅い or ファンが回りすぎ or CPU使用率が高すぎるとき

インストール直後は「Spotlight」がすべてのファイルに対してインデックスを作るので、そちらにリソースを取られて遅くなります。 

インデックス作成中は右上の「Spotlight」をクリックすると分かるようになっています。

いつまでもその状態が続く場合は、アクティビティモニタから「mds」や「mdworker」という名前のプロセスを探します。もしそのプロセスがリソースを食っているのであれば、インデックスの構築中なのでそっとしておく。そうでなければ別に原因があります。

### フルスクリーンモードについて

現時点ではApple製アプリケーション以外はほとんど対応していません。

Mission Controlに既にあるデスクトップとは別に新しいデスクトップを作成します。

対応アプリは右上にフルスクリーンボタンが表示されます。

※Chromeでも表示されますが、現時点ではChromeの「全画面表示」モードになるだけです。

![フルスクリーンボタン](http://creamo.jp/wp/wp-content/uploads/2011/07/fullscreen-open.png "対応アプリの右上にフルスクリーンボタン")

フルスクリーンモードを終了するには右上にカーソルを持って行き、ボタンを選択します。

![フルスクリーン解除ボタン](http://creamo.jp/wp/wp-content/uploads/2011/07/fullscreen-close.png "右上にフルスクリーン解除ボタン")

**※マルチディスプレイだとサブディスプレイが活用不可能に**

フルスクリーンモードにすると、サブディスプレイは真っ暗になり、使用不可になります。ただし、フルスクリーンアプリの環境設定等の画面を配置することは可能です。

QuickTimeのフルスクリーン機能がこれになったため、サブディスプレイで他の画面を表示することが出来なくなりました。

### 三本指での「戻る/進む」が使えない or 三本指操作をするとクラッシュする

「multiclutch」というアプリを入れている場合に発生する模様。

[AppCleaner](http://www.freemacsoft.net/)等でアンインストールしましょう。

### ホームのライブラリフォルダにアクセスするには？

Lionから「ライブラリ」へのリンクがFinderに表示されなくなりました。

Finderの「移動」→「フォルダへ移動」から「~/library」でアクセス出来るという方法もありますが、もっと簡単な方法として、Finderの「移動」メニュー状態で[option]キーを押せば「ライブラリ」へのリンクが表示されます。

![ライブラリへのリンク](http://creamo.jp/wp/wp-content/uploads/2011/07/library-menu.png "[option]キーでライブラリへのリンクを表示")

### Xcodeが動かない

Xcode4に更新してください。Lion公開に伴って無料化されました。

<div class="amz-etr-under"><div class="amz-left" style="float:left;"><div class="amz-image">[![](http://a5.mzstatic.com/us/r1000/080/Purple/4d/a4/4a/mzi.wjcyaplr.60x60-50.png)](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fxcode%252Fid448457090%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30)</div></div><div class="amz-right"><div class="amz-title">[Xcode](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fxcode%252Fid448457090%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30) [![Xcode - Apple®](http://ax.phobos.apple.com.edgesuite.net/ja_jp/images/web/linkmaker/badge_macappstore-sm.gif)](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fxcode%252Fid448457090%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30)</div><div class="amz-detail">価格: 無料 (記事公開時)
カテゴリ: 開発ツール
[App Storeで詳細を見る。](http://click.linksynergy.com/fs-bin/stat?id=x8/aPky4v0I&offerid=94348&type=3&subid=0&tmpid=2192&RD_PARM1=http%253A%252F%252Fitunes.apple.com%252Fjp%252Fapp%252Fxcode%252Fid448457090%253Fmt%253D12%2526uo%253D4%2526partnerId%253D30)</div></div></div>

### 右上のユーザー名を消したい

「システム環境設定」→「ユーザとグループ」→「ログインオプション」→「ファストユーザスイッチメニューを表示」のチェックを外す

もしくは「アイコン」表示にして表示を小さくする。
![ユーザー名を非表示](http://creamo.jp/wp/wp-content/uploads/2011/07/user-icon.png "ユーザー名を非表示に")

### マイファイルに発見されたくないファイルがある

今回追加された「マイファイル」機能。最近使ったファイルを種類別に分けて表示するので、いちいちファイル場所まで探しに行く手間が省けます。

ちなみに「マイファイル」で最もマウスの横スクロールが活躍しますｗ

しかし、全てのファイルを検知するので、見られたくないファイルまで表示してしまいます。

**・マイファイルの使用自体をやめる方法**

「Finder」の環境設定→「一般」→「サイドバー」→「マイファイル」のチェックを外します。

![マイファイルを非表示](http://creamo.jp/wp/wp-content/uploads/2011/07/finder-myfile.png "マイファイルを非表示に")

**・マイファイルを使いたい場合**

「システム環境設定」→「Spotlight」→「プライバシー」から表示させたくないフォルダを指定します。

これで検索にも引っからなくなります。

### 以前とフォントが変わった気がする

タブなどの UI で、「AquaKana」という今までメニューバーにしか使ってなかったフォントを使用するようになりました。違和感はありますが、慣れますので我慢しましょう。

### クリーンインストールの方法

**※インターネットに接続されていることが前提**

1\. 起動時に[option]キーを押して立ち上げる

2\. リカバリHDを選択して起動
3\. メニューバーからディスクユーティリティを立ち上げ、メインのHDを消去してインストールする

### 絵文字入力をしたい

全てのアプリケーションで可能？

メニューバーの「編集」→「特殊文字」を選択すると文字一覧が表示され、そのなかの絵文字カテゴリから入力したい文字をダブルクリック。
![特殊文字](http://creamo.jp/wp/wp-content/uploads/2011/07/menu-emoji.png "特殊文字を選択")

![絵文字](http://creamo.jp/wp/wp-content/uploads/2011/07/emoji.png "絵文字")

### Finderでファイルの移動が可能に

Finderでは今までドラッグ以外によるファイルの移動が不可能でしたが、Lionで可能になりました。

[command]＋x でコピーした後、[command]＋[option]＋v で移動になります。

### 再起動時の「再開」機能をオフにする

Lionでは、再起動すると終了時の状態に戻す「再開」機能があります。

立ち上げていた全てのアプリケーションが起動し、ウィンドウ位置も同じ状態で復元されます。

![再起動時](http://creamo.jp/wp/wp-content/uploads/2011/07/reboot-check.png "再起動時に「再開」の確認")

しかし、アプリを立ち上げて欲しくない場合もあります。

再起動時にチェックを外せばいいのですが、常にチェックを外す場合は

「システム環境設定」→「一般」にある「アプリケーションを終了して再度開くときにウインドウを復元」のチェックを外します。これで「再開」機能がオフになります。

![「再開」をオフ](http://creamo.jp/wp/wp-content/uploads/2011/07/reboot-off.png "「再開」をオフに")

### Finderのサイドバーの文字が大きい

Lionになったことで「Finder」のサイドバーの文字サイズが大きくなって違和感を感じた人は多いんじゃないでしょうか。

![サイドバー中](http://creamo.jp/wp/wp-content/uploads/2011/07/side-middle.png "サイドバーの文字サイズが少し大きい")

「システム環境設定」→「一般」の「サイドバーのアイコンサイズ」を「中」→「小」にすることで、元のサイズに戻すことが出来ます。
![サイドバー設定](http://creamo.jp/wp/wp-content/uploads/2011/07/finder-option.png "アイコンサイズを「小」に")

以下のサイズになります。見慣れてる方にとってはこっちの方がいいですね。

![サイドバー小](http://creamo.jp/wp/wp-content/uploads/2011/07/side-small.png "サイドバーの文字サイズが変化")

### 参考サイト

書き切れないものもあるので、他の情報に関しては以下のサイトを参考にしてください。

・[Macまとめ - Mac OSX 10.7 Lion@2ch 既出質問まとめ](http://www28.atwiki.jp/2chmac/pages/85.html "Link to Macまとめ - Mac OSX 10.7 Lion@2ch 既出質問まとめ")

・[OS X Lion Tips のまとめ － MACお宝鑑定団 blog（羅針盤）](http://www.macotakara.jp/blog/index.php?ID=13526 "Link to OS X Lion Tips のまとめ － MACお宝鑑定団 blog（羅針盤）")

また、ちょっとしたデザインの変更点というまとめも。

ここまで気づいた方はいるんだろうかｗ

[DESIGN ARCHIVE - BLOG: 細かすぎて伝わりづらい、Mac OSX Lionのデザイン変更点まとめ。](http://stam-design-stam.blogspot.com/2011/07/mac-osx-lion.html "Link to DESIGN ARCHIVE - BLOG: 細かすぎて伝わりづらい、Mac OSX Lionのデザイン変更点まとめ。")