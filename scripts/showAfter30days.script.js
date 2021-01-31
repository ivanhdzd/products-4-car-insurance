const { Product } = require('../src/classes/Product/Product.class');
const { CarInsurance } = require('../src/classes/CarInsurance.class');
const { PRODUCT_COVERAGE } = require('../src/enums/ProductCoverage.enum');

//#region MAIN

console.time('Show after 30 days');

const FROM_DAY = 1;
const TO_DAY = 30;

const dayZeroProducts = getDayZeroProducts();
const carInsurance = new CarInsurance(dayZeroProducts);

for (let i = FROM_DAY; i <= TO_DAY; i++) {
	console.log('-------- DAY %d --------', i);
	showProductsPrices(carInsurance.updatePrice());
	console.log('');
}

console.timeEnd('Show after 30 days');
process.exit();

//#endregion MAIN

//#region FUNCTIONS

/**
 * Get day 0 products list to set into `CarInsurance` constructor class.
 * @returns {Product[]} Products list.
 */
function getDayZeroProducts() {
	return [
		new Product('Medium Coverage', 10, 20),
		new Product(PRODUCT_COVERAGE.FULL_COVERAGE, 2, 0),
		new Product('Low Coverage', 5, 7),
		new Product(PRODUCT_COVERAGE.MEGA_COVERAGE, 0, 80),
		new Product(PRODUCT_COVERAGE.MEGA_COVERAGE, -1, 80),
		new Product(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 15, 20),
		new Product(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 10, 49),
		new Product(PRODUCT_COVERAGE.SPECIAL_FULL_COVERAGE, 5, 49),
		new Product(PRODUCT_COVERAGE.SUPER_SALE, 3, 6),
	];
}

/**
 * Show products details list.
 * @param {Product[]} products list.
 */
function showProductsPrices(products) {
	products.forEach(({ name, sellIn, price }) => console.log('%s, %s, %s', name, sellIn, price));
}

//#endregion FUNCTIONS