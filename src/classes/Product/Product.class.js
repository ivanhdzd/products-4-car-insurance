class Product {
	/** GET Maximum price permitted */
	get maxPrice() {
		return 50;
	}
	/** SET Maximum price permitted */
	set maxPrice(_) {
		// console.warn('[%s] Cannot modify `maxPrice` because it\'s only readonly value: %d', this.constructor.name, this.maxPrice);
	}

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

		if (this.sellIn < 0) {
			this.price -= 2;
		} else {
			--this.price;
		}

		if (this.price < 0) {
			this.price = 0;
		}

		return this;
	}
}

module.exports = {
	Product,
};