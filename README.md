# zenn-content-boilerplate

VSCodeとDocker（devcontainer）で書くZenn執筆環境のボイラープレートです。

* Zennの執筆に便利なVSCode拡張機能やスニペットが自動的にインストールされます。
* VSCodeの見た目はZennのテーマカラーに合わせています。
* `zenn-cli` を使ってローカル環境でプレビューを確認しながら記事を書くことができます。
* 記事作成をはじめzenn-cliコマンドはnpmスクリプトに登録済でVSCodeから1クリックで実行できます。
* 記事の内容は `markdownlint`, `textlint` でマークダウンの静的解析（lint）を行います。
* 英単語の誤字がないか `cspell`（Code Spell Checker）でチェックをします。
* `husky` と `lint-staged` でコミット時に自動でlintします。不正な形式の文章はコミットされません。

## 前提

記事を編集するエディタはVSCode（Visual Studio Code）を使います。Zennの執筆に最適化されたVSCodeの拡張機能やスニペットが入ります。

[Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

また、Dockerで専用コンテナを準備して環境をつくります。そのため、ローカル環境にDockerのインストールが必要です。特にこだわりが無ければ、GUIで簡単にDockerコンテナを導入できるDocker Desktopが（個人利用であれば）無料で使えて便利です。

[Docker Desktop](https://www.docker.com/products/docker-desktop/)

VSCodeからコンテナにアクセスして執筆するため、Dev ContainersのVSCode拡張機能も必要です。

[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

利用にあたって、ローカル環境にVSCodeとDockerが準備されていることを前提としています。

## 使い方

まずは右上の"Use this template"をクリックして、このボイラープレートからリポジトリを複製します。

VSCodeで複製したリポジトリをクローンして"Reopen in Container"でコンテナを立ち上げます。

コンテナを立ち上げると `docker/Dockerfile` の内容に基づきコンテナ環境を構築します。`package.json` に書かれたライブラリがインストールされます。また `devcontainer.json` に書かれた設定によって、VSCode拡張機能がインストールされます。

ローカルのエディタでZennの記事が執筆できる `zenn-cli` もインストールされます。Zenn公式が書いている以下の記事を参考に、GitHubリポジトリと連携してください。

[😸 GitHubリポジトリでZennのコンテンツを管理する](https://zenn.dev/zenn/articles/connect-to-github)

ここまでの手順でZennの記事を書き始める準備が整いました。

`zenn-cli` を使った記事の書き方は、Zenn公式が書いている以下の記事に詳しく書かれています。参考にしてください。

[🔨 Zenn CLIで記事・本を管理する方法](https://zenn.dev/zenn/articles/zenn-cli-guide)

記事を書く際は、Zennに最適化されたVSCode拡張機能やスニペットを使うと便利です。また、コミット時に静的解析（lint）がかかります。文章が不正な場合、警告メッセージが表示されてコミットできません。

詳しい設定については、それぞれ後述しています。

## 設定内容

### 書くための設定

#### Zenn CLIのコマンドはnmpスクリプトで

記事のプレビュー（`npx zenn preview`）や記事の新規作成（`npz zenn new:article`）はnpmスクリプトに登録しています。VSCodeのサイドバーから1クリックで実行できます。

#### VSCode拡張機能でマークダウンを効率よく書く

マークダウンの文章を書く効率を上げる目的で以下の拡張機能を入れています。

[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

[Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)

[:emojisense:](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense)

[Insert Date String](https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring)

[Copy file name](https://marketplace.visualstudio.com/items?itemName=nemesv.copy-file-name)

[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

#### 独自のマークダウン記法はVSCodeスニペットで

`.vscode/markdown.code-snippets` にZenn独自の記法を含むマークダウン記法のスニペットを登録しています。Zennで使えるマークダウン記法は以下の記事を参考にしてください。

[ZennのMarkdown記法一覧](https://zenn.dev/zenn/articles/markdown-guide)

### 静的解析（lint）の設定

マークダウンの構造（`markdownlint`）、文章の内容（`textlint`）、英単語の誤字（`cspell`）についてlintします。また、マークダウンファイル以外はコードフォーマット（自動整形）を `prettier` を使って実施します。マークダウンはmarkdownlintと設定が競合するため、意図的に対象から外しています。

#### VSCodeエディタ上で問題があればリアルタイムで確認

静的解析（lint）はVSCodeの拡張機能も入れているので、問題があればエディタ上で常に確認できます。

[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

[vscode-textlint](https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint)

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### コミット時にも確認して不正な形式のマークダウンを警告

`husky` と `lint-staged` でコミット時に自動でlintします。そのため、不正な形式の文章はコミットされません。

#### lintの詳細設定

ボイラープレートなので、そのまま使えます。使っていきながら、好みの設定に書き換えてください。

##### markdownlint

記載中です。

##### textlint

記載中です。

##### cspell

記載中です。

##### Prettier

記載中です。
