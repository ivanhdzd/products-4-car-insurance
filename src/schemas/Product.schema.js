const joi = require('joi');

const schema4Product = joi.object().keys({
	name: joi.string().required(),
	sellIn: joi.number().required().allow(0),
	price: joi.number().required().allow(0),
}).required();

const schema4Products = joi.array().items(schema4Product).optional();

module.exports = {
	schema4Product,
	schema4Products,
};