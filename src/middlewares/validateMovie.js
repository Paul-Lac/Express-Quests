const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;
  const errors = [];

  if (title == null) {
    errors.push({ field: "title", message: "is required" });
  } else if (title.length >= 255) {
    errors.push({
      field: "title",
      message: "Should contain less than 255 characters",
    });
  }
  if (director == null) {
    errors.push({ field: "director", message: "is required" });
  } else if (director.length >= 255) {
    errors.push({
      field: "director",
      message: "Should contain less than 255 characters",
    });
  }
  if (year == null) {
    errors.push({ field: "year", message: "is required" });
  } else if (year.length >= 255) {
    errors.push({
      field: "year",
      message: "Should contain less than 255 characters",
    });
  }
  if (color == null) {
    errors.push({ field: "color", message: "is required" });
  } else if (color.length >= 255) {
    errors.push({
      field: "color",
      message: "Should contain less than 255 characters",
    });
  }
  if (duration == null) {
    errors.push({ field: "duration", message: "is required" });
  } else if (isNaN(parseInt(duration))) {
    errors.push({
      field: "duration",
      message: "Should be an integer",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = validateMovie;
