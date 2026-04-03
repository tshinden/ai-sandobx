const { Router } = require('express');

const router = Router();

// In-memory store (replace with DB later)
const accounts = [];
let nextId = 1;

// GET /accounts — list all accounts
router.get('/', (req, res) => {
  res.json(accounts);
});

// GET /accounts/:id — get single account
router.get('/:id', (req, res) => {
  const account = accounts.find((a) => a.id === Number(req.params.id));
  if (!account) return res.status(404).json({ error: 'Not found' });
  res.json(account);
});

// POST /accounts — create account
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  const account = { id: nextId++, name, email };
  accounts.push(account);
  res.status(201).json(account);
});

module.exports = router;
