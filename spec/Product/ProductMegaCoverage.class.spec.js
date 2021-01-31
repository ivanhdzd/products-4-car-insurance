const { expect } = require('chai');

const { ProductMegaCoverage } = require('../../src/classes/Product/ProductMegaCoverage.class');
const { PRODUCT_COVERAGE } = require('../../src/enums/ProductCoverage.enum');

describe(`Testing '${ProductMegaCoverage.name}' class`, () => {
	it('Should update product price where it `sellIn` and `price` values is greater than 1', () => {
		const product = new ProductMegaCoverage(PRODUCT_COVERAGE.MEGA_COVERAGE, 5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(5);
		expect(product.price).equal(product.maxPrice);
	});

	it('Should update product price and try to modify it `maxPrice` value', () => {
		const product = new ProductMegaCoverage(PRODUCT_COVERAGE.MEGA_COVERAGE, 5, 10);
		product.maxPrice = 50;
		product.updatePrice();
		const maxPrice = product.maxPrice;

		expect(maxPrice).equal(80);
		expect(product.sellIn).equal(5);
		expect(product.price).equal(maxPrice);
	});

	it('Should update product price where it `sellIn` value is 0', () => {
		const product = new ProductMegaCoverage(PRODUCT_COVERAGE.MEGA_COVERAGE, 0, 10);
		product.updatePrice();

		expect(product.sellIn).equal(0);
		expect(product.price).equal(product.maxPrice);
	});

	it('Should update product price where it `sellIn` value is -5', () => {
		const product = new ProductMegaCoverage(PRODUCT_COVERAGE.MEGA_COVERAGE, -5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(-5);
		expect(product.price).equal(product.maxPrice);
	});

	it('Should update product price where it `price` value is 0', () => {
		const product = new ProductMegaCoverage(PRODUCT_COVERAGE.MEGA_COVERAGE, 5, 0);
		product.updatePrice();

		expect(product.sellIn).equal(5);
		expect(product.price).equal(product.maxPrice);
	});
});