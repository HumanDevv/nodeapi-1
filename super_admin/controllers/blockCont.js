const Joi = require("joi");
const { CreateError } = require("../../utils/create_err");
const { trycatch } = require("../../utils/try_catch");

var add_block = async (req, res, next, transaction) => {
  const { blockName, district_id } = req.body;

  const schema = Joi.object({
    blockName: Joi.string().max(50).required(),
    district_id: Joi.number()
      .integer()
      .max(9007199254740991)
      .positive()
      .required(),
  });

  const { error } = await schema.validateAsync(req.body);

  if (error) {
    throw new CreateError("ValidationError", error.details[0].message);
  }

  await transaction("blocks").insert({ blockName, district_id });

  res.send({ status: "001", msg: "Block added successfully." });
};
var get_block = async (req, res, next, transaction) => {
  const Block = await transaction("blocks").select("id","blockName");
  res.send({ status: "001", Block });
};
var show_block = async (req, res, next, transaction) => {
  const Block = await transaction("blocks").select("id","blockName");
  res.send({ status: "001", Block });
};
add_block = trycatch(add_block)
get_block = trycatch(get_block)
show_block= trycatch(show_block);
module.exports = {add_block,get_block,show_block}


