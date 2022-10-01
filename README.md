# zenn-content-boilerplate

VSCodeとDocker（devcontainer）で書くZenn執筆環境のボイラープレートです。

* Zennの執筆に便利なVSCode拡張機能が自動的にインストールされます。
* VSCodeの見た目をZennのテーマカラーに合わせています。
* `zenn-cli` を使ってローカル環境でプレビューを確認しながら記事を書くことができます。
* 記事作成をはじめzenn-cliコマンドはnpmスクリプトに登録済でVSCodeから1クリックで実行できます。
* 記事の内容は `markdownlint`, `textlint` でマークダウンの静的解析（lint）を行います。
* 英単語の誤字がないか `cspell`（Code Spell Checker）でチェックをします。
* `husky` と `lint-staged` でコミット時に自動でlintします。不正な形式の文章はコミットされません。
