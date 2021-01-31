const { Product } = require('./Product.class');

class ProductMegaCoverage extends Product {
	/** @override Maximum price permitted */
	maxPrice = 80;

	/**
	 * Build new product with mega coverage instance.
	 * @param {string} name for this product.
	 * @param {number} sellIn for this product.
	 * @param {number} price for this product.
	 * @returns {Product} Product instance.
	 */
    constructor(name, sellIn, price) {
		super(name, sellIn, price);

		this.maxPrice = 80;
		this.price = this.maxPrice;
	}

	/**
	 * @override Update price for this product.
	 * @returns {Product} Current product instance with it prices already updated.
	 */
	updatePrice() {
		return this;
	}
}

module.exports = {
	ProductMegaCoverage,
};