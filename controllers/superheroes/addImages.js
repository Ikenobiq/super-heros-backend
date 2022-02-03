// const fs = require("fs/promises");
// const path = require("path");
// const { v4 } = require("uuid");
// const newHeroImages = [];
// const { superheroes } = require("../../models/superheroes");
// const heroImagesDir = path.join(__dirname, "../../", "/public");
// const tempDir = path.join(__dirname, "../../", "temp");

// const addImages = async (req, res) => {
//   const { path: tempDir, originalname } = req.file;
//   const uploadDir = path.join(__dirname, "public/", originalname);
//   console.log(tempDir);
//   console.log(uploadDir);
//   try {
//     await fs.rename(tempDir, resultPath);
//     const image = `publick/${originalname}`;
//     const newHeroImage = { name: req.body.name, image, id: v4() };
//     newHeroImages.push(newHeroImage);
//     res.status(201).json(newHeroImage);
//   } catch (error) {
//     await fs.unlink(tempDir);
//   }
// };
// module.exports = addImages;
