const { Product } = require('./Product.class');

class ProductSuperSale extends Product {
	/**
	 * Build new product with super sale instance.
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
			this.price -= 4;
		} else {
			this.price -= 2;
		}

		if (this.price < 0) {
			this.price = 0;
		}

		return this;
	}
}

module.exports = {
	ProductSuperSale,
};