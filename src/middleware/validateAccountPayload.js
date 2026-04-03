function validateAccountPayload(req, res, next) {
  const { name, email } = req.body || {};

  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({
      error: 'ValidationError',
      message: 'name is required and must be a non-empty string'
    });
  }

  if (typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({
      error: 'ValidationError',
      message: 'email is required and must be a valid email-like string'
    });
  }

  return next();
}

module.exports = validateAccountPayload;
