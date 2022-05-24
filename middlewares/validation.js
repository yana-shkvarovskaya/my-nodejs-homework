const validation = (scheme) => {
  return (req, res, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      error.status = 404;
      next(error);
    }
    next();
  };
};

module.exports = validation;
