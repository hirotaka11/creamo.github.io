title: "WP-DBManagerでデータベースバックアップと最適化を華麗にこなそう"
date: 2011-07-23 15:53:09
tags:
id: 805
categories:
- wordpress
---

WordPressのバックアップは取っていますか？

WordPressはバックアップを2種類取る必要があります。ファイルとデータベースですね。

ファイルはFTPで落とすとして、DBを「phpMyAdmin」でいちいちバックアップするのも面倒です。

ここではデータベースバックアップ作業をより簡易に行う「WP-DBManager」を紹介していきます。<!--more-->

**参考ページ**

・[Wordpressのバックアップと最適化！ WP-DBManagerが最高すぎる件！！ | No Second Life](http://www.ttcbn.net/no_second_life/archives/8281 "Link to Wordpressのバックアップと最適化！ WP-DBManagerが最高すぎる件！！ | No Second Life")

・[WP-DBManager（WordPressデータベース・バックアップ用プラグイン）の導入と使い方](http://wp-exp.com/blog/wp-dbmanager/ "Link to WP-DBManager（WordPressデータベース・バックアップ用プラグイン）の導入と使い方")

### 既にWordpress Database Backup プラグインを使っている方へ

WordPressのバックアッププラグインとしては「[Wordpress Database Backup](http://austinmatzko.com/wordpress-plugins/wp-db-backup/)」の方が有名かもしれません。私も今まで使っていました。

しかし、WP-DBManagerの方が使い勝手がいいのでぜひ乗り換えを検討してみてはいかがでしょうか。

このプラグインは公式で紹介されているほどなので、使っている方は多いでしょう。

[データベースのバックアップ - WordPress Codex 日本語版](http://wpdocs.sourceforge.jp/%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE%E3%83%90%E3%83%83%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97 "Link to データベースのバックアップ - WordPress Codex 日本語版")

**Wordpress Database Backup 不満点**

*   <span>バックアップファイルが溜まっても自動で削除してくれない（容量圧迫の原因に）</span>
*   <span>バックアップの機能しか持ってない</span>

### WP-DBManager プラグインの特徴

*   <span>サーバ上に保存しておくバックアップファイルの数を自由に設定可能</span>
*   <span>データベースの管理、最適化が簡単に出来る（定期的に最適化も可能）</span>
*   <span>SQLクエリが実行出来る</span>

これだけでもWordpress Database Backupから乗り換えるのに十分な理由だと思います。

まだバックアップを自動化してない人はこの機会にいれておきましょう。

### WP-DBManager プラグイン の導入方法

1\. 「管理画面」から「プラグインのインストール」画面を開き、「[WP-DBManager](http://wordpress.org/extend/plugins/wp-dbmanager/)」で検索

2\. インストール後、有効化する

**有効化させるには「.htaccess」ファイルを移動させる必要があります。**

3\. wp-content/plugins/wp-dbmanager フォルダにある「htaccess.txt」を

　wp-content/backup-db フォルダに移動

4\. 移動させた「htaccess.txt」のファイル名を「.htaccess」に変更

### WP-DBManager プラグイン を日本語化する

英語でも使えなくはないですが、せっかくなので日本語化してしまいましょう。

WP-DBManager 日本語化ファイルは以下のページからダウンロード出来ます。

[WordPress - WP-DBManager 日本語化ファイル | Technolog.jp - ICTウェブマガジン](http://technolog.jp/website/cms/1161 "Link to WordPress - WP-DBManager 日本語化ファイル | Technolog.jp - ICTウェブマガジン")

日本語化ファイルを解凍し、以下のファイルがあることを確認します。

*   <span>wp-dbmanager-ja.mo</span>
*   <span>wp-dbmanager-ja.po</span>
この2つのファイルを wp-content/plugins/wp-dbmanager フォルダにアップロードします。

これで日本語化出来るはずです。

### WP-DBManager プラグイン の使用方法

WP-DBManagerは管理画面のデータベースの項目として表示されます。
![ダッシュボード画面](http://creamo.jp/wp/wp-content/uploads/2011/07/wp-dbmanager_1.png "ダッシュボード画面")
**データベース**

使用しているデータベース情報、テーブル情報が表示されます。

**バックアップ**

「バックアップステータスの確認」でエラーが出ていなければバックアップが可能です。

「データベースバックアップ」でバックアップをすることが出来ます。サーバーを圧迫する原因になるので、出来る限りgzip圧縮しましょう。圧縮出来るかはサーバー環境によって異なります。

![データベースバックアップ](http://creamo.jp/wp/wp-content/uploads/2011/07/db-backup.png "データベースバックアップ")

**バックアップDB管理**

既に作成されたバックアップファイルの管理が出来ます。リストア、削除、メール送信も可能です。

**データベースの最適化**

指定したテーブルの最適化が出来ます。

**データベースの修復**

指定したテーブルの修復が出来ます。

**データ・テーブルの削除**

指定したデータ・テーブルの削除が出来ます。

**SQLクエリ実行**

SQLクエリ実行が実行出来ます。

**DBオプション**

データベースパスの設定画出来ます。

「自動スケジュール」が設定出来ます。

自動バックアップ、自動最適化の設定はしておきましょう。念のためメール送信先も設定しましょう。

![自動スケジュール](http://creamo.jp/wp/wp-content/uploads/2011/07/auto_backup.png "自動スケジュール")

**アンインストール**

WP-DBManagerを無効化するだけでは完全に削除出来ないので、この項目からアンインストールします。

--

このプラグインはデータベースの操作がほぼWordPress上で行えるのが便利ですね。

データが消えたことがある人は既に痛感しているとは思いますが、バックアップを取っていない人は泣きを見る前にバックアップの自動化をしておくことをオススメします。

バックアップファイル数を決められる機能も客先納品の際に凄く助かりますよね。