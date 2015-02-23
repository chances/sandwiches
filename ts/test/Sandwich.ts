/// <reference path="../declarations/tsd.d.ts" />

import chai = require('chai');
import e = require('../lib/errors');
import Sandwich = require('../lib/Sandwich');

var expect = chai.expect,
    should = chai.should();

describe('Sandwich', function () {

    describe('.make', function () {
        it('should require a Recipe', function () {
            var make = function () {
                Sandwich.make(null);
            }
            expect(make).to.throw(e.ArgumentError);
            expect(make).to.throw('A Sandwich requires a Recipe.');
        });
    });

    describe('.remake', function () {
        it('should require a Recipe', function () {
            var remake = function () {
                Sandwich.remake(null);
            }
            expect(remake).to.throw(e.ArgumentError);
            expect(remake).to.throw('A Sandwich requires a Recipe.');
        });
    });
});
