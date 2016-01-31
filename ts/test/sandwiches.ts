import chai = require('chai');

import sw = require('../lib/index');

let should = chai.should();

describe('sandwiches', function (): void {

    describe('module', function (): void {
        it('should contain a class named Sandwich', function (): void {
            should.exist(sw.Sandwich);
        });
        it('should contain a class named Recipe', function (): void {
            should.exist(sw.Recipe);
        });
        it('should contain a class named Topping', function (): void {
            should.exist(sw.Topping);
        });
    });
});

// TODO: Write better tests
