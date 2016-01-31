import chai = require('chai');
import e = require('../lib/errors');
import Sandwich = require('../lib/Sandwich');

let expect = chai.expect;
chai.should();

describe('Sandwich', function (): void {

    describe('.make', function (): void {
        it('should require a Recipe', function (): void {
            let make = function (): void {
                Sandwich.make(null);
            };
            expect(make).to.throw(e.ArgumentError);
            expect(make).to.throw('A Sandwich requires a Recipe.');
        });
    });

    describe('.remake', function (): void {
        it('should require a Recipe', function (): void {
            let remake = function (): void {
                Sandwich.remake(null);
            };
            expect(remake).to.throw(e.ArgumentError);
            expect(remake).to.throw('A Sandwich requires a Recipe.');
        });
    });
});
