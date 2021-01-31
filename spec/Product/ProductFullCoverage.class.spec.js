const { expect } = require('chai');

const { ProductFullCoverage } = require('../../src/classes/Product/ProductFullCoverage.class');
const { PRODUCT_COVERAGE } = require('../../src/enums/ProductCoverage.enum');

describe(`Testing '${ProductFullCoverage.name}' class`, () => {
	it('Should update product price where it `sellIn` and `price` values is greater than 1', () => {
		const product = new ProductFullCoverage(PRODUCT_COVERAGE.FULL_COVERAGE, 5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(4);
		expect(product.price).equal(11);
	});

	it('Should update product price and try to modify it `maxPrice` value', () => {
		const product = new ProductFullCoverage(PRODUCT_COVERAGE.FULL_COVERAGE, 5, 10);
		product.maxPrice = 80;
		product.updatePrice();
		const maxPrice = product.maxPrice;

		expect(maxPrice).equal(50);
		expect(product.sellIn).equal(4);
		expect(product.price).equal(11);
	});

	it('Should update product price where it `sellIn` value is 0', () => {
		const product = new ProductFullCoverage(PRODUCT_COVERAGE.FULL_COVERAGE, 0, 10);
		product.updatePrice();

		expect(product.sellIn).equal(-1);
		expect(product.price).equal(12);
	});

	it('Should update product price where it `sellIn` value is -5', () => {
		const product = new ProductFullCoverage(PRODUCT_COVERAGE.FULL_COVERAGE, -5, 10);
		product.updatePrice();

		expect(product.sellIn).equal(-6);
		expect(product.price).equal(12);
	});

	it('Should update product price where it `price` value is 0', () => {
		const product = new ProductFullCoverage(PRODUCT_COVERAGE.FULL_COVERAGE, 5, 0);
		product.updatePrice();

		expect(product.sellIn).equal(4);
		expect(product.price).equal(1);
	});

	it('Should update product price where it `price` value is 50', () => {
		const product = new ProductFullCoverage(PRODUCT_COVERAGE.FULL_COVERAGE, 5, 50);
		product.updatePrice();

		expect(product.sellIn).equal(4);
		expect(product.price).equal(50);
	});
});