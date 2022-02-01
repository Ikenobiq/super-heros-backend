const { Superhero } = require("../../models/superheroes");

const getAll = async (req, res) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);
  const skipIndex = (page - 1) * pageSize;

  const totalCount = (await Superhero.find().exec()).length;

  const result = await Superhero.find()
    .sort({ _id: 1 })
    .limit(pageSize)
    .skip(skipIndex)
    .exec();

  res.json({
    status: "success",
    code: 200,
    data: {
      totalCount,
      result,
    },
  });
};

module.exports = getAll;
