const express = require('express');
const accountsController = require('../controllers/accountsController');
const validateAccountPayload = require('../middleware/validateAccountPayload');

const router = express.Router();

router.get('/', accountsController.listAccounts);
router.get('/:accountId', accountsController.getAccountById);
router.post('/', validateAccountPayload, accountsController.createAccount);
router.patch('/:accountId', validateAccountPayload, accountsController.updateAccount);
router.delete('/:accountId', accountsController.deleteAccount);

module.exports = router;
