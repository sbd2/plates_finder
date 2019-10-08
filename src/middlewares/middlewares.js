exports.notFound = (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Resourse not found', 
    timestamp: Date.now()
  })
};

exports.verifyToken = (req, res, next) => {
  if (req.query.key === "VALID_TOKEN") {
    next();
  } else {
    res.status(401).json({
      status: 401,
      message: 'Invalid auth token', 
      timestamp: Date.now()
    });
  }
};