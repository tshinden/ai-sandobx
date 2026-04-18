function listAccounts(req, res) {
  res.status(200).json({
    items: [],
    message: 'TODO: implement account list retrieval'
  });
}

function getAccountById(req, res) {
  const { accountId } = req.params;

  res.status(200).json({
    id: accountId,
    message: 'TODO: implement account retrieval by id'
  });
}

function createAccount(req, res) {
  const payload = req.body;

  res.status(201).json({
    id: 'todo-generated-id',
    payload,
    message: 'TODO: implement account creation'
  });
}

function updateAccount(req, res) {
  const { accountId } = req.params;
  const payload = req.body;

  res.status(200).json({
    id: accountId,
    payload,
    message: 'TODO: implement account update'
  });
}

function deleteAccount(req, res) {
  res.status(204).send();
}

module.exports = {
  listAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount
};
