const { Product } = require('./Product/Product.class');
const { ProductFullCoverage } = require('./Product/ProductFullCoverage.class');
const { ProductSpecialFullCoverage } = require('./Product/ProductSpecialFullCoverage.class');
const { ProductMegaCoverage } = require('./Product/ProductMegaCoverage.class');
const { ProductSuperSale } = require('./Product/ProductSuperSale.class');
const { PRODUCT_COVERAGE } = require('../enums/ProductCoverage.enum');
const { schema4Products } = require('../schemas/Product.schema');

class CarInsurance {
	/**
	 * Build new car insurance instance with it products list.
	 * @param {Product[]} products list.
	 * @returns {CarInsurance} Car insurance instance.
	 */
	constructor(products = []) {
		if (!Array.isArray(products)) {
			throw new Error(`Products is not an array: ${typeof products}`);
		}

		if (!products.length) {
			this.products = [];
			return;
		}

		const { error, value } = schema4Products.validate(products);
		if (error) {
			console.error(error);
			throw new Error(error.message);
		}
		this.products = value;
	}

	/**
	 * Update prices for each product inside it products list.
	 * @returns {Product[]} Products list with it prices already updated.
	 */
	updatePrice() {
		const products = [];
		for (let i = 0; i < this.products.length; i++) {
			const product = updateProductPrice(this.products[i]);
			products.push(product);
		}
		this.products = products;
		return products;
	}
}

module.exports = {
	CarInsurance,
};

/**
 * Update price for a product.
 * @param {Product} product item.
 * @returns {Product} item with it price already updated.
 */
function updateProductPrice({ name, sellIn, price }) {
	switch(name) {
		case PRODUCT_COVERAGE.FULL_COVERAGE:
			const productFullCoverage = new ProductFullCoverage(name, sellIn, price);
			return productFullCoverage.updatePrice();

		case PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE:
			const productSpecialFullCoverage = new ProductSpecialFullCoverage(name, sellIn, price);
			return productSpecialFullCoverage.updatePrice();

		case PRODUCT_COVERAGE.MEGA_COVERAGE:
			const productMegaCoverage = new ProductMegaCoverage(name, sellIn, price);
			return productMegaCoverage.updatePrice();

		case PRODUCT_COVERAGE.SUPER_SALE:
			const productSuperSale = new ProductSuperSale(name, sellIn, price);
			return productSuperSale.updatePrice();

		default:
			const product = new Product(name, sellIn, price);
			return product.updatePrice();
	}
}