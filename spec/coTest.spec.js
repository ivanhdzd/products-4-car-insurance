const { expect } = require('chai');

const { CarInsurance, Product } = require('../src/coTest');

describe('Co Test', () => {
    it('should foo', () => {
        const coTest = new CarInsurance([new Product('foo', 0, 0)]);
        const products = coTest.updatePrice();
        expect(products[0].name).equal('fixme');
    });
});