const { Product } = require('./Product/Product.class');
const { ProductFullCoverage } = require('./Product/ProductFullCoverage.class');
const { ProductSpecialFullCoverage } = require('./Product/ProductSpecialFullCoverage.class');
const { ProductMegaCoverage } = require('./Product/ProductMegaCoverage.class');
const { ProductSuperSale } = require('./Product/ProductSuperSale.class');
const { PRODUCT_COVERAGE } = require('../enums/ProductCoverage.enum');

class CarInsurance {
	/**
	 * Build new car insurance instance with it products list.
	 * @param {Product[]} products list.
	 * @returns {CarInsurance} Car insurance instance.
	 */
	constructor(products = []) {
		this.products = products;
	}

	/**
	 * Update prices for each product inside it products list.
	 * @returns {Product[]} Products list with it prices already updated.
	 */
	updatePrice() {
		for (let i = 0; i < this.products.length; i++) {
			this.products[i] = updateProductPrice(this.products[i]);
		}
		return this.products;
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