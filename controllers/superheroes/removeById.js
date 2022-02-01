const { NotFound } = require("http-errors");

const { Superhero } = require("../../models/superheroes");

const removeById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await Superhero.findByIdAndRemove(id);
  if (!result) {
    throw new NotFound(`Superhero with id=${id} not found`);
  }
  res.status(200).json({ message: `Superhero with id=${id} deleted` });
};

module.exports = removeById;
