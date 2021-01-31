const { Product } = require('./Product.class');

class ProductMegaCoverage extends Product {
	/** @override GET Maximum price permitted */
	get maxPrice() {
		return 80;
	}
	/** @override SET Maximum price permitted */
	set maxPrice(_) {
		// console.warn('[%s] Cannot modify `maxPrice` because it\'s only readonly value: %d', this.constructor.name, this.maxPrice);
	}

	/**
	 * Build new product with mega coverage instance.
	 * @param {string} name for this product.
	 * @param {number} sellIn for this product.
	 * @param {number} price for this product.
	 * @returns {Product} Product instance.
	 */
    constructor(name, sellIn, price) {
		super(name, sellIn, price);
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