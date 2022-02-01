const { Superhero } = require("../../models/superheroes");

const getAll = async (req, res) => {
  const result = await Superhero.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
