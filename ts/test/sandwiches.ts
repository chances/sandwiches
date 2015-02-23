/// <reference path="../declarations/tsd.d.ts" />

import chai = require('chai');

import sw = require('../lib/index');

var should = chai.should();

describe('sandwiches', function () {

    describe('module', function () {
        it('should contain a class named Sandwich', function () {
            should.exist(sw.Sandwich);
        });
        it('should contain a class named Recipe', function () {
            should.exist(sw.Recipe);
        });
        it('should contain a class named Topping', function () {
            should.exist(sw.Topping);
        });
    });
});

// TODO: Write better tests
