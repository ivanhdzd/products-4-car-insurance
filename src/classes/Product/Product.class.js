class Product {
	/** Maximum price permitted */
	maxPrice = 50;

	/**
	 * Build new generic product instance.
	 * @param {string} name for this product.
	 * @param {number} sellIn for this product.
	 * @param {number} price for this product.
	 * @returns {Product} Product instance.
	 */
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
	}

	/**
	 * Update price for this product.
	 * @returns {Product} Current product instance with it prices already updated.
	 */
	updatePrice() {
		--this.sellIn;

		if (!this.price) return this;

		if (this.sellIn < 0) {
			this.price -= 2;
			return this;
		}

		--this.price;
		return this;
	}
}

module.exports = {
	Product,
};