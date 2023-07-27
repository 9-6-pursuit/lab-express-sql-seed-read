// THIS FILE VALIDATES CREATE ROUTE

const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "Artist is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if ([true, false, "true", "false", undefined].includes(is_favorite)) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

// const sortAndFilter = ({ order, is_favorite }) => {
//   const sort =
//     order === "asc"
//       ? "ORDER BY name ASC"
//       : order === "desc"
//       ? "ORDER BY name DESC"
//       : "";
//   const filter =
//     is_favorite === "true"
//       ? "WHERE is_favorite=true"
//       : is_favorite === "false"
//       ? "WHERE is_favorite=false"
//       : "";

//   return [filter, sort].filter((e) => (e ? true : false)).join(" ");
// };

module.exports = { checkBoolean, checkName, checkArtist };
