const { Product } = require('./Product.class');

class ProductFullCoverage extends Product {
	/**
	 * Build new product with full coverage instance.
	 * @param {string} name for this product.
	 * @param {number} sellIn for this product.
	 * @param {number} price for this product.
	 * @returns {Product} Product instance.
	 */
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
	}

	/**
	 * @override Update price for this product.
	 * @returns {Product} Current product instance with it prices already updated.
	 */
	updatePrice() {
		--this.sellIn;
		this.price += this.sellIn < 0 ? 2 : 1;

		if (this.price > this.maxPrice) {
			this.price = this.maxPrice;
		}
		return this;
	}
}

module.exports = {
	ProductFullCoverage,
};