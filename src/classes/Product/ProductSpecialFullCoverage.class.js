const { Product } = require('./Product.class');

class ProductSpecialFullCoverage extends Product {
	/**
	 * Build new product with special full coverage instance.
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

		if (this.sellIn < 0) {
			this.price = 0;
		} else if (this.sellIn < 5) {
			this.price += 3;
		} else if (this.sellIn < 10) {
			this.price += 2;
		} else {
			++this.price;
		}

		if (this.price > this.maxPrice) {
			this.price = this.maxPrice;
		}

		return this;
	}
}

module.exports = {
	ProductSpecialFullCoverage,
};