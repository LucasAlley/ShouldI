const mongoSanitize = require("express-mongo-sanitize");
const asyncHandler = require("./async");
//clean requests
exports.mongoClean = asyncHandler(async (req, res, next) => {
  const { body, params, query } = req;

  let toClean = { body, params, query };

  mongoSanitize.sanitize(toClean);

  return next();
});
