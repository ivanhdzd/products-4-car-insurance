const { expect } = require('chai');

const { ProductSpecialFullCoverage } = require('../../src/classes/Product/ProductSpecialFullCoverage.class');
const { PRODUCT_COVERAGE } = require('../../src/enums/ProductCoverage.enum');

describe(`Testing '${ProductSpecialFullCoverage.name}' class`, () => {
	it('Should update product price where it `sellIn` value is 15 and it `price` value is 25', () => {
		const product = new ProductSpecialFullCoverage(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 15, 25);
		product.updatePrice();

		expect(product.sellIn).equal(14);
		expect(product.price).equal(26);
	});

	it('Should update product price and try to modify it `maxPrice` value', () => {
		const product = new ProductSpecialFullCoverage(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 15, 25);
		product.maxPrice = 80;
		product.updatePrice();
		const maxPrice = product.maxPrice;

		expect(maxPrice).equal(50);
		expect(product.sellIn).equal(14);
		expect(product.price).equal(26);
	});

	it('Should update product price where it `sellIn` value is 8 and it `price` value is 16', () => {
		const product = new ProductSpecialFullCoverage(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 8, 16);
		product.updatePrice();

		expect(product.sellIn).equal(7);
		expect(product.price).equal(18);
	});

	it('Should update product price where it `sellIn` value is 8 and it `price` value is 5', () => {
		const product = new ProductSpecialFullCoverage(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 4, 5);
		product.updatePrice();

		expect(product.sellIn).equal(3);
		expect(product.price).equal(8);
	});

	it('Should update product price where it `sellIn` value is -1 and it `price` value is 8', () => {
		const product = new ProductSpecialFullCoverage(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, -1, 8);
		product.updatePrice();

		expect(product.sellIn).equal(-2);
		expect(product.price).equal(0);
	});

	it('Should update product price where it `price` value is 50', () => {
		const product = new ProductSpecialFullCoverage(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 5, 50);
		product.updatePrice();

		expect(product.sellIn).equal(4);
		expect(product.price).equal(50);
	});
});