const { expect } = require('chai');

const { ProductSuperSale } = require('../../src/classes/Product/ProductSuperSale.class');
const { PRODUCT_COVERAGE } = require('../../src/enums/ProductCoverage.enum');

describe(`Testing '${ProductSuperSale.name}' class`, () => {
	it('Should update product price where it `sellIn` value is 8 and it `price` value is 16', () => {
		const product = new ProductSuperSale(PRODUCT_COVERAGE.SUPER_SALE, 8, 16);
		product.updatePrice();

		expect(product.sellIn).equal(7);
		expect(product.price).equal(14);
	});

	it('Should update product price where it `sellIn` value is 0 and it `price` value is 16', () => {
		const product = new ProductSuperSale(PRODUCT_COVERAGE.SUPER_SALE, 0, 16);
		product.updatePrice();

		expect(product.sellIn).equal(-1);
		expect(product.price).equal(12);
	});

	it('Should update product price where it `sellIn` value is 0 and it `price` value is 1', () => {
		const product = new ProductSuperSale(PRODUCT_COVERAGE.SUPER_SALE, -2, 1);
		product.updatePrice();

		expect(product.sellIn).equal(-3);
		expect(product.price).equal(0);
	});
});