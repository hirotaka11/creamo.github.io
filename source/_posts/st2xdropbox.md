title: "「Sublime Text 2」✕「Dropbox」でどこでも作業環境を作ろう！"
date: 2013-06-03 08:30:00
tags:
id: 1173
categories:
  - tool
---

超久々ですが、心に余裕が出来てきたのでまた書き始めます。

私も「[Sublime Text 2](http://www.sublimetext.com/)」(以下：ST2)を使い始めてやっと半年近く経ちました。（なので書きたいネタが結構あります）

ご存知の通り(知らなかったら是非この機会に知っておいていただけると)Macだけでなく、Windows、Linuxとマルチな環境で動作する高機能エディタです。

そして、プラグインが豊富でカスタマイズ性が高いです。（プラグイン入れないとふっつ〜のエディタです）

だからこその弊害は、カスタマイズをすればするほどオリジナリティに、複雑化していきます。

そのため環境を整えるのが非常に面倒です。個人用と会社用の端末が違う時、設定が共有できないのは非常に萎えます。

なので、Dropboxを使用して設定ファイルを共有化しようって方法です。

自分はMac間でしかやってませんが、違うOS間での共有もきっと出来るはず･･･？
<!--more-->
今回はこちらの記事を参考にさせて頂きました。

[Sublime Text 2によるストレスフリーな開発環境 | ntcncp.net](http://ntcncp.net/2012/12/21/sublime-useful-tips)

### Dropboxの準備

Dropbox使ったことない方はこちら　→　[アカウント作成](http://db.tt/C1rDVgi)

上記リンクから作ると私と貴方に多少容量アップのメリットがありますｗ

### 設定をDropbox側に共有する手順

1\. Dropbox側にST2の設定を入れるディレクトリを作成する(自分が分かりやすい場所に)
[bash]mkdir ~/Dropbox/App/Sublime\ Text\ 2/[/bash]

2\. 上記で作ったディレクトリにST2の設定ディレクトリを移動
[bash]mv ~/Library/Application\ Support/Sublime\ Text\ 2/ ~/Dropbox/App/Sublime\ Text\ 2/[/bash]
※ 厳密には[Installed Packages][Packages][Pristine Packages]の3ディレクトリのみで良いのですが、まるごとの方が色々楽

3\. Dropbox側ディレクトリにシンボリックリンクを張る
[bash]ln -s ~/Dropbox/App/Sublime\ Text\ 2/ ~/Library/Application\ Support/Sublime\ Text\ 2[/bash]

### シンボリックリンクを削除して元に戻したい場合

1\. 以下のコマンドでシンボリックリンクを削除して、
[bash]rm -rf ~/Library/Application\ Support/Sublime\ Text\ 2[/bash]

2\. Dropbox側のディレクトリからライブラリ側にファイルを戻せばおわり。
[bash]mv ~/Dropbox/App/Sublime\ Text\ 2/ ~/Library/Application\ Support/Sublime\ Text\ 2/[/bash]

### 他の端末のST2からDropbox内の設定を反映する

1\. ST2インストール時に作られた設定ファイルを削除
[bash]rm -rf ~/Library/Application\ Support/Sublime\ Text\ 2[/bash]

2\. Dropbox内の設定ファイルにシンボリックリンクを張る
[bash]ln -s ~/Dropbox/App/Sublime\ Text\ 2/ ~/Library/Application\ Support/Sublime\ Text\ 2[/bash]

Sublime Textは使えば使うほどカスタマイズしていくので、再び同じ状態にするのはホントしんどいです。なのでやっといて損はないです。

別にDropboxでなくてもクラウドストレージとシンボリックリンクの組み合わせを利用しただけなので、他のアプリにも色々通用する部分はあるかと思います。

有効に活用してみましょう。

### ちなみに

Sublime Text 2は個人なら複数台PCにインストールして利用してOKと書いてありますので、ライセンス的にも問題ないです。

[Sublime Text 2 - Sales FAQ](http://www.sublimetext.com/sales_faq)

> ・Using a Personal License at Work
> 
> As licenses are per-user, you're welcome to use your license key on all computers where you are the primary user, including at work.