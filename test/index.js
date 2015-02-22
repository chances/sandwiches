#!/usr/bin/env node

"use strict";

var chalk = require('chalk');
var sw = require('../');

var should = require('chai').should();

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
