# zenn-content-boilerplate

🚧 このボイラープレートは現在作成中です。

* VSCodeとDockerで書くZenn執筆環境のボイラープレートです。
  * Zennの執筆に便利なVSCode拡張機能が自動的にインストールされます。
  * VSCodeの見た目をZennのテーマカラーに合わせています。
  * そのうえで、zenn-cliを使ってローカル環境でプレビューを確認しながら記事を書くことができます。
* 記事の内容はmarkdownlintとtextlintでマークダウンの静的解析（lint）を行います。
  * huskyとlint-stagedを使ってコミット時にステージされたファイルを自動的にlintします。
