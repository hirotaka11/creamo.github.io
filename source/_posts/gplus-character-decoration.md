title: "Google+で文字を装飾してみよう"
date: 2011-07-13 08:00:00
tags:
id: 744
categories:
  - tool
---

![](/tool/gplus-character-decoration/google_plus_android_logo.png "Google+ logo")前回の[まとめ記事](http://creamo.jp/tool/googleplus-fast/ "Link to 今すぐ使えるGoogle+まとめ")がホットエントリになり、それをきっかけにGoogle+を始めた方も多いようです。

Google+のネタは日々発見されていくので、ネタに困りません。どんどん触っていきましょう。

テキストやメディアを流していくストリームがありますよね。

実は**ストリームに書き込むテキスト、コメントは装飾出来ます。**

今回はその方法を紹介していきたいと思います。<!--more-->

以下の記事を参考に取り上げていきます。

[Google+のテキスト装飾記法について - ものづくり検定32級人](http://d.hatena.ne.jp/oxalis-gps/20110702/1309620416 "Link to Google+のテキスト装飾記法について - ものづくり検定32級人")

### 文字を装飾するには記号で囲むのがポイント

Google+のストリームではある特殊記法をすることで文字装飾が可能です。

Markdown記法ですので、覚えるのは簡単です。

まず、装飾出来る種類は以下の3種類です。

*   <span>**太字**</span>
*   <span>_斜め_</span>
*   <span><strike>打ち消し</strike></span>


### 太字にする記法

*で囲みます。半角のアスタリスクです。

*太字になーれ* = **太字になーれ**

### 斜め字にする記法

_で囲みます。半角のアンダーバーです。

_これはナナメだよー_ = _これはナナメだよー_

### 打ち消しする記法

-で囲みます。半角のハイフンです。

-バルス- = <strike>バルス</strike>

**なんですが･･･打ち消しには現時点でバグがあります。**

### 打ち消しの謎の挙動

この辺りは[上記の記事](http://d.hatena.ne.jp/oxalis-gps/20110702/1309620416 "Link to Google+のテキスト装飾記法について - ものづくり検定32級人")を参考にさせていただきます。

打ち消しは囲まれた文字に**半角英数字**が含まれていないと無効になります。

また、**ハイフンに半角スペース以外の文字が隣接している必要**があります。

**半角英数字の代わりに記号を代用するパターンもあります。**

これは記号が半角英数字の機能を果たしてます。

-&gt;あ-

-あ&gt;-

-&lt;あ-

-あ&lt;-

しかし、これ以外の記号を代用に使う場合は

-あ !-

-! あ-

のように半角スペースを挿入する必要があります。謎すぎるｗ

記号は半角でも全角でも良いようです。

### それぞれの記法を組み合わせる

それぞれの記法は組み合わせることが出来ます。

文字を入れ子にして囲みましょう。

*_-太字にして斜めにして打ち消して-_* = **_<strike>太字にして斜めにして打ち消して</strike>_**

コツとしては打ち消しのハイフンを一番内側にすることです。

装飾に関してはさらに色づけとか出来ると面白いんですね。

[red]赤色[/red]とかで出来ると便利そうな･･･。

Google+でのテキスト入力は他のサービスと違ってAAが入れやすいので、海外の方達に波紋すると面白そうなんですけどねぇ。横幅狭いので入れられる種類が限られますけど、流行って欲しいという期待を密かに持っている自分がいたりします。

--

**おまけ**

Google+のユーザー数はもう1000万人を突破してしまったようです。

以下はGoogle+で回ってきた投稿

**ユーザー数1000万人を突破するまでにかかった年月** 

GREE: 5年2ヶ月  

Evernote: 3年4ヶ月  

mixi: 3年3ヶ月  

Facebook: 2年8ヶ月  

Twitter: 2年7ヶ月  

Foursquare: 2年3ヶ月  

ニコニコ動画: 23ヵ月  

Youtube: 14ヶ月  

Google+: 13日 