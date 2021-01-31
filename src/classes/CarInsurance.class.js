const { PRODUCT_COVERAGE } = require('../enums/ProductCoverage.enum');
const { Product } = require('./Product/Product.class');

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
		case PRODUCT_COVERAGE.MEGA_COVERAGE: // TODO: Implements this case
			const productMegaCoverage = new Product(name, sellIn, price);
			return productMegaCoverage.updatePrice();

		case PRODUCT_COVERAGE.FULL_COVERAGE: // TODO: Implements this case
			const productFullCoverage = new Product(name, sellIn, price);
			return productFullCoverage.updatePrice();

		case PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE: // TODO: Implements this case
			const productSpecialFullCoverage = new Product(name, sellIn, price);
			return productSpecialFullCoverage.updatePrice();

		case PRODUCT_COVERAGE.SUPER_SALE: // TODO: Implements this case
			const productSuperSale = new Product(name, sellIn, price);
			return productSuperSale.updatePrice();

		default:
			const product = new Product(name, sellIn, price);
			return product.updatePrice();
	}
}