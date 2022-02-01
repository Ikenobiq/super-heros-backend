const { NotFound } = require("http-errors");

const { Superhero } = require("../../models/superheroes");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Superhero.findById(id);
  if (!result) {
    throw new NotFound(`Superhero with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
