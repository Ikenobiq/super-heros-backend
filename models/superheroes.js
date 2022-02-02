const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const superheroes = Schema(
  {
    nickname: {
      type: String,
      required: [true, "Nickname is required"],
    },
    real_name: {
      type: String,
    },
    origin_description: {
      type: String,
    },
    superpowers: {
      type: String,
    },
    catch_phrase: {
      type: String,
    },
    images: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true },
);

const joiSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string(),
  origin_description: Joi.string(),
  catch_phrase: Joi.string(),
  images: Joi.array(),
});

const Superhero = model("superhero", superheroes);

module.exports = {
  Superhero,
  joiSchema,
};
