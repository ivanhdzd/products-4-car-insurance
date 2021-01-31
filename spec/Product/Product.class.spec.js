const { expect } = require('chai');

const { Product } = require('../../src/Product/Product.class');

describe(`Testing '${Product.name}' class`, () => {
	it('Should update product price where it `sellIn` and `price` values is greater than 1', () => {
		const product = new Product('Low Coverage', 5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(4);
		expect(product.price).equal(9);
	});

	it('Should update product price where it `sellIn` value is 0', () => {
		const product = new Product('Medium Coverage', 0, 10);
		product.updatePrice();

		expect(product.sellIn).equal(-1);
		expect(product.price).equal(8);
	});

	it('Should update product price where it `sellIn` value is -5', () => {
		const product = new Product('Medium Coverage', -5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(-6);
		expect(product.price).equal(8);
	});

	it('Should update product price where it `price` value is 0', () => {
		const product = new Product('Low Coverage', 5, 0);
		product.updatePrice();

		expect(product.sellIn).equal(4);
		expect(product.price).equal(0);
	});
});