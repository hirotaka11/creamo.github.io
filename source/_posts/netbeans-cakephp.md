title: "NetBeansでCakePHPの環境作りをしてみよう！"
date: 2011-06-28 08:30:02
tags:
id: 659
categories:
  - tool
---

PHPの知識がまだ浅い私ですが、せっかくなのでフレームワークと一緒に覚えることにしました。

そこで、軽いと評判の「[NetBeans](http://ja.netbeans.org/)」を使って「CakePHP」が動く環境を設定していこうと思います。

NetBeansは既に日本語化されており、何故かマスコットキャラクターまでいます。上に表示されてる「ねこび〜ん」がそうです。

プログラムを組むことを容易にする統合開発環境(IDE)は[Eclipse](http://mergedoc.sourceforge.jp/)、[Aptana](http://www.aptana.com/)などの方が有名かもしれません。その辺りは各自合うものを選択しましょう。これらのソフトはWin/Mac両対応しています。

私はNetBeansを選択したので、今回は他の開発環境には触れません。<!--more-->今回は以下のページを参考にさせて頂きました。

[管理人の日記～つらつらなるままに～ » CakePHP + NetBeans [cakephp-netbeans]](http://fuettc.com/wordpress/?p=485 "Link to 管理人の日記～つらつらなるままに～ » CakePHP + NetBeans [cakephp-netbeans]")

[管理人の日記～つらつらなるままに～ » NetBeans + CakePHP Code Completion （コード補完）](http://fuettc.com/wordpress/?p=1150 "Link to 管理人の日記～つらつらなるままに～ » NetBeans + CakePHP Code Completion （コード補完）")

### 概要

*   [必要なファイルの準備](#h3-1)
*   [NetBeansの設定](#h3-2)
*   [CakePHPプロジェクトの作成](#h3-3)
*   [Component、Modelのコードを補完する](#h3-4)
*   [Helperのコードを補完する](#h3-5)

### 必要なファイルの準備

以下のファイルをダウンロードし、NetBeansをインストールします。

・[NetBeans](http://ja.netbeans.org/)

・[netbeans-cakephp](https://github.com/evilbloodydemon/cakephp-netbeans/tree/autocomplete)

・[CakePHP](http://cakephp.jp/)

### NetBeansの設定

NetBeansが日本語になっていることを前提にします。

**1\. プラグインを追加する**

[ツール]->[プラグイン]->[使用可能なプラグイン]

[NetBeans の開発]をインストール

**2\. cakephp-netbeans のプロジェクトを追加する**

[ファイル]->[プロジェクトを開く]
[cakephp-netbeans]を展開したフォルダを指定する。

**3\. nbmファイルを作成する**

※プロジェクトのプロパティを開き、ソースレベルを[1.5]にする。(1.6だとエラーになる模様)

![ソースレベル](/tool/netbeans-cakephp/sourclevel.png "ソースレベルを1.5に")

追加したプロジェクト(CakePHP Framework)の上で右クリック -> [NBMを作成]をクリック

ファイルタブをクリックすると[build]というディレクトリが作成されており、

[org-cakephp-netbeans.nbm]というファイルが作成されています。

**4\. プラグインの追加**

1と同様にプラグインから[ダウンロード済み]タブを開き、[プラグインの追加]をクリック

3で作成したnbmファイルを追加します。

追加するとCakePHP Framework Pluginが追加され、[インストール済み]で確認出来ます。
![Cakephp plugin add](/tool/netbeans-cakephp/cakephp-plugin-add.png "cakephp-plugin-add.png")

### CakePHPプロジェクトの作成

新規にPHPプロジェクトを作成し、CakePHPの中身のフォルダを入れるだけです。

(プロジェクト内にcakeフォルダを作成して入れることが多いようです)

CakePHPについては各自調べてください。

初めての方には[【libro】 初心者のためのCakePHPプログラミング入門](http://libro.tuyano.com/index2?id=8002 "Link to 【libro】 初心者のためのCakePHPプログラミング入門")がオススメ。

### Component、Modelのコードを補完する

コード補完を有効にするとミスタイプを防ぎ、効率を上げることが出来ます。

下記のファイルをNetBeansのプロジェクトにある[nbproject]フォルダの中に置きます。

(例：/phpのプロジェクト/nbproject/cake_component_code_completion.php)

これだけで補完されるようになるはずです。

Modelは1つのControllerで使うだけなら、直接各コントローラーに@propertyを追記した方が良いかもしれないということです。確証はないので、nbprojectに配置で問題はありません。
<script src="https://gist.github.com/934205.js?file=cake_component_code_completion.php"></script>

$this->Session->(Ctrl + Space)

$this->YourModel->(Ctrl + Space)

### Helperのコードを補完する

@var を使って補完する方法は下記ページの通りです。

[CakePHP 1.3のビューでヘルパーのコードを補完する for Eclipce PDT @ php-tips](http://php-tips.com/php/cakephp-php/2010/08/code-completion-in-cakephp1_3-views-for-eclipse-pdt "Link to CakePHP 1.3のビューでヘルパーのコードを補完する for Eclipce PDT @ php-tips")

既に上記の方法でプラグインをインストールしてある場合は何もしなくて大丈夫です。

（もしかしたら上のComponent、Modelもプラグインで有効になってるかも？）
<script src="https://gist.github.com/934219.js?file=cake_helper_code_completion.php"></script>

view側で

$this->Form->(Ctrl + Space)

と追記することで候補が出てきます。

Pluginをインストールしなくても、view側のファイルに@propertyを追記しても補完は出来ます。

**追記**

まだまだCakePHPのプラグインは沢山あるようです。色々試していかないといけないですね。

[最近使用した CakePHP Plugin/Behavior/Component メモ | 暇人じゃない](http://cho-co.be/blog/cakephp/recently-used-cakephp-plugin-behavior-component/ "Link to 最近使用した CakePHP Plugin/Behavior/Component メモ | 暇人じゃない")