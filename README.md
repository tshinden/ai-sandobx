# Accounts API Scaffold

Express で作成した `accounts API` の雛形です。

## Setup

```bash
npm install
npm run dev
```

## Endpoints

- `GET /health`
- `GET /api/accounts`
- `GET /api/accounts/:accountId`
- `POST /api/accounts`
- `PATCH /api/accounts/:accountId`
- `DELETE /api/accounts/:accountId`

`POST` と `PATCH` は以下の JSON を受け取る想定です。

```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```
