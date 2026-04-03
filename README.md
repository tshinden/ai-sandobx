# ai-sandobx

## セットアップ

```bash
npm install
```

## 起動

```bash
# 通常起動
npm start

# ファイル変更を監視して自動再起動（Node.js 18+）
npm run dev
```

デフォルトは `http://localhost:3000`。ポートを変える場合は環境変数で指定:

```bash
PORT=8080 npm start
```

## Accounts API

| メソッド | パス            | 説明               |
| -------- | --------------- | ------------------ |
| GET      | /accounts       | アカウント一覧取得 |
| GET      | /accounts/:id   | アカウント1件取得  |
| POST     | /accounts       | アカウント作成     |

### 使用例

```bash
# 一覧取得
curl http://localhost:3000/accounts

# 作成
curl -X POST http://localhost:3000/accounts \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'

# 1件取得
curl http://localhost:3000/accounts/1
```
