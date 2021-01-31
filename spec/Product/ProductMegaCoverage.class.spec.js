const { expect } = require('chai');

const { ProductMegaCoverage } = require('../../src/classes/Product/ProductMegaCoverage.class');

describe(`Testing '${ProductMegaCoverage.name}' class`, () => {
	it('Should update product price where it `sellIn` and `price` values is greater than 1', () => {
		const product = new ProductMegaCoverage('Low Coverage', 5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(5);
		expect(product.price).equal(product.maxPrice);
	});

	it('Should update product price where it `sellIn` value is 0', () => {
		const product = new ProductMegaCoverage('Low Coverage', 0, 10);
		product.updatePrice();

		expect(product.sellIn).equal(0);
		expect(product.price).equal(product.maxPrice);
	});

	it('Should update product price where it `sellIn` value is -5', () => {
		const product = new ProductMegaCoverage('Medium Coverage', -5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(-5);
		expect(product.price).equal(product.maxPrice);
	});

	it('Should update product price where it `price` value is 0', () => {
		const product = new ProductMegaCoverage('Medium Coverage', 5, 0);
		product.updatePrice();

		expect(product.sellIn).equal(5);
		expect(product.price).equal(product.maxPrice);
	});
});