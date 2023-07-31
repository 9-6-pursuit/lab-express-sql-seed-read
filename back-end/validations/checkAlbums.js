const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ error: "Album name is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (is_favorite === "true" || is_favorite === "false" || is_favorite === undefined) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value ('true' or 'false')" });
    }
  };
  
  module.exports = { checkBoolean, checkName };
  