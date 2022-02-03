const express = require("express");
const { route } = require("express/lib/application");
const ctrl = require("../../controllers/superheroes");
const { ctrlWrapper, upload } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.patch("/:id", ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

// route.patch("/public", upload.fields("images"), ctrlWrapper(ctrl.updateImages));

router.post("/public", upload.single("image"));

module.exports = router;
