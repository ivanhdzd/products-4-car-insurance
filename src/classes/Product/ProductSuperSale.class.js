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
		return super.updatePrice();
	}
}

module.exports = {
	ProductSuperSale,
};