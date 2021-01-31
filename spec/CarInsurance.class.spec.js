const { expect } = require('chai');

const { CarInsurance } = require('../src/classes/CarInsurance.class');
const PRODUCTS_FIXTURE = require('../fixtures/products.fixture.json');

const lastInputIndex = PRODUCTS_FIXTURE.length - 2;
const lastOutputIndex = PRODUCTS_FIXTURE.length - 1;

describe(`Testing '${CarInsurance.name}' class`, () => {
	describe('Should test with full products historical list', () => {
		for (let i = 0, j = 1; i <= lastInputIndex, j <= lastOutputIndex; i++, j++) {
			const inputDay = PRODUCTS_FIXTURE[i];
			const expectationDay = PRODUCTS_FIXTURE[j];
			const carInsurance = new CarInsurance(inputDay);
			const outputDay = carInsurance.updatePrice();

			describe(`Should compare day ${i} with day ${j}`, () => {
				for (let k = 0; k < inputDay.length; k++) {
					const productExpectation = expectationDay[k];
					const productResult = outputDay[k];
					const { name } = productResult;

					it(`Should update \`${name}\` product prices`, () => {
						expect(productExpectation.name).equal(productResult.name);
						expect(productExpectation.sellIn).equal(productResult.sellIn);
						expect(productExpectation.price).equal(productResult.price);
					});
				}
			});
		}
	});

	describe('Should test with empty products historical list', () => {
		it('Should test an empty products list', () => {
			const carInsurance = new CarInsurance();
			const outputDay = carInsurance.updatePrice();
			expect(outputDay.length).equal(0);
		});
	});
});