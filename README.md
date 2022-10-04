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

記事を編集するエディタはVSCode（[Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)）を使います。Zennの執筆に最適化されたVSCodeの拡張機能やスニペットが入ります。

また、Dockerで専用コンテナを準備して環境をつくります。そのため、ローカル環境にDockerのインストールが必要です。特にこだわりが無ければ、GUIで簡単にDockerコンテナを導入できる[Docker Desktop](https://www.docker.com/products/docker-desktop/)が（個人利用であれば）無料で使えて便利です。

VSCodeからコンテナにアクセスして執筆するため、[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)のVSCode拡張機能も必要です。

利用にあたって、ローカル環境にVSCodeとDockerが準備されていることを前提としています。

## 使い方

まずは右上の"Use this template"をクリックして、このボイラープレートからリポジトリを複製します。

VSCodeで複製したリポジトリをクローンして"Reopen in Container"でコンテナを立ち上げます。

コンテナを立ち上げると `docker/Dockerfile` の内容に基づきコンテナ環境を構築します。`package.json` に書かれたライブラリがインストールされます。また `devcontainer.json` に書かれた設定によって、VSCode拡張機能がインストールされます。

ローカルのエディタでZennの記事が執筆できる `zenn-cli` もインストールされます。Zenn公式が書いている以下の記事を参考に、GitHubリポジトリと連携してください。

[😸 GitHubリポジトリでZennのコンテンツを管理する](https://zenn.dev/zenn/articles/connect-to-github)

ここまでの手順でZennの記事を書き始める準備が整いました。`zenn-cli` を使った記事の書き方は、Zenn公式が書いている以下の記事に詳しく書かれています。参考にしてください。

[🔨 Zenn CLIで記事・本を管理する方法](https://zenn.dev/zenn/articles/zenn-cli-guide)

記事を書く際は、Zennに最適化されたVSCode拡張機能やスニペットを使うと便利です。また、コミット時に静的解析（lint）がかかります。文章が不正な場合、警告メッセージが表示されてコミットできません。

詳しい設定について、後述していきます。

## 設定内容

### 書くための設定

#### Zenn CLIのコマンドはnmpスクリプトで

記事のプレビュー（`npx zenn preview`）や記事の新規作成（`npz zenn new:article`）はnpmスクリプトに登録しています。VSCodeのサイドバーから1クリックで実行できます。

#### VSCode拡張機能でマークダウンを効率よく書く

マークダウンの文章を書く効率を上げる目的で以下の拡張機能を入れています。

| 拡張機能 | 説明 |
| ---- | ---- |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) | ショートカットや便利なコマンド|
| [:emojisense:](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense) | 絵文字入力の補助 |
| [Insert Date String](https://marketplace.visualstudio.com/items?itemName=jsynowiec.vscode-insertdatestring) | 現在時刻をショートカット入力（Zennの日時フォーマット `YYYY-MM-DD hh:mm` で入力されるよう設定済）|
| [Copy file name](https://marketplace.visualstudio.com/items?itemName=nemesv.copy-file-name) | ファイル名を右クリックメニューからコピー|
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) | パスを入力補完 |

#### 独自のマークダウン記法はVSCodeスニペットで

`.vscode/markdown.code-snippets` にZenn独自の記法を含むマークダウン記法のスニペットを登録しています。

Zennで使えるマークダウン記法は以下の記事を参考にしてください。

[👩‍💻 ZennのMarkdown記法一覧](https://zenn.dev/zenn/articles/markdown-guide)

### 静的解析（lint）の設定

このボイラープレートには、以下についてlintする設定が入っています。

* マークダウンの構造（`markdownlint`）
* 文章の内容（`textlint`）
* 英単語の誤字（`cspell`）

また、マークダウンファイル以外はコードフォーマット（自動整形）を `prettier` を使って実施します。マークダウンファイルはmarkdownlintと設定が競合するため、意図的に対象から外しています。

#### VSCodeエディタ上で問題があればリアルタイムで確認

静的解析（lint）はVSCodeの拡張機能も入れているので、問題があればエディタ上で常に確認できます。

| 拡張機能 | 説明 |
| ---- | ---- |
| [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) | VSCodeのエディタ上でマークダウン構造を解析 |
| [vscode-textlint](https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint) | VSCodeのエディタ上でテキストを解析 |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | VSCodeのエディタ上で英単語の誤字をチェック |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | VSCodeでコードフォーマット（自動整形） |

#### コミット時にも確認して不正な形式のマークダウンを警告

`husky` と `lint-staged` でコミット時に自動でlintします。そのため、不正な形式の文章はコミットされません。

#### lintの詳細設定

ボイラープレートなので、そのまま使えます。使っていきながら、好みの設定に書き換えてください。

##### markdownlint

デフォルトの構文チェックは厳しめに設定されています。

そのため  `.vscode/settings.json` と `.markdownlint-cli2.jsonc` で一部ルールを調整しています。

```jsonc
"markdownlint.config": {
  "line-length": {
    // MD013: Adjust the maximum number of characters per sentence
    "line_length": 150
  },
  "no-duplicate-heading": false, // MD024: Allow duplicate heading text
  "no-trailing-punctuation": false, // MD026: Allow headings with . ,;:
  "no-inline-html": false, // MD033: Allow HTML description
  "no-bare-urls": false // MD034: Allow URLs to be written as is
}
```

##### textlint

ベースとして以下の2つのプリセットを適用しています。

| プリセット名 | 説明 |
| ---- | ---- |
| [textlint-rule-preset-ja-spacing](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing) | 日本語のスペース有無を決定するtextlintルールプリセット |
| [textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing) | 技術文書向けのtextlintルールプリセット |

プリセットのままだと厳し過ぎる箇所があるため `.textlintrc` で設定を一部上書きしています。

```json
{
  "plugins": {
    "@textlint/markdown": {
      "extensions": [
        ".md"
      ]
    }
  },
  "filters": {
    "comments": true
  },
  "rules": {
    "prh": {
      "rulePaths": [
        "./prh/index.yml"
      ]
    },
    "preset-ja-technical-writing": {
      "sentence-length": {
        "max": 150
      },
      "no-exclamation-question-mark": {
        "allowFullWidthExclamation": true,
        "allowFullWidthQuestion": true
      },
      "ja-no-successive-word": false,
      "ja-no-mixed-period": {
        "allowPeriodMarks": [
          ":",
          "："
        ]
      },
      "no-doubled-joshi": {
        "strict": false,
        "allow": [
          "も",
          "や",
          "か"
        ],
        "separatorCharacters": [
          ",",
          "，",
          "、",
          ".",
          "．",
          "。",
          "?",
          "!",
          "？",
          "！",
          "「",
          "」",
          "\"",
          "”",
          "“"
        ]
      }
    },
    "preset-ja-spacing": {
      "ja-space-around-code": {
        "before": true,
        "after": true
      }
    }
  }
}
```

また、校正用辞書を `/prh/rules` へ追加できるようにしています。初期設定では `/prh/rules/tech.yml` に技術用語の校正辞書をいくつか登録しています。必要に応じて用語を追加してください。

```yml
meta:
  - title: 技術用語の固有名詞ルール
rules:
  - expected: インターフェース
    patterns:
      - インターフェイス
      - インタフェース
      - インタフェイス
    prh: 技術用語
  - expected: ソフトウェア
    pattern: ソフトウェアー
    prh: 技術用語
  - expected: ハードウェア
    pattern: ハードウェアー
    prh: 技術用語
  - expected: デフォルト
    pattern: ディフォルト
    prh: 技術用語
```

##### cspell

許可する言葉は `.cspell.json` の `words` に追加します。対象の文字列にカーソルを合わせてVSCodeのクイックフィックスで登録するのが便利です。

##### Prettier

`.prettierignore` に `*.md` 記載して、マークダウンファイルをコードフォーマットの対象外にしています。その他の設定は特に入れていません。自動整形時はデフォルト設定が適用されます。
