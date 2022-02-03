// const fs = require("fs/promises");
// const path = require("path");

// const { superheroes } = require("../../models/superheroes");
// const imgDir = path.join(__dirname, "../../", "public");
// const updateImages = async (req, res) => {
//   const { path: imgDir, originalname } = req.file;
//   const resultPath = path.join(heroImagesDir, originalname);
//   const { _id } = req.hero;
//   try {
//     await fs.rename(imgDir, resultPath);
//     const heroImagesURL = `publick/${originalname}`;
//     const hero = await superheroes.findByIdAndUpdate(
//       _id,
//       { heroImagesURL },
//       { new: true },
//     );
//     res.json(hero);
//   } catch (error) {
//     await fs.unlink(imgDir);
//   }
// };
// module.exports = updateImages;
