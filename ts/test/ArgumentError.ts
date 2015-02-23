/// <reference path="../declarations/tsd.d.ts" />

import chai = require('chai');
import e = require('../lib/errors');

var expect = chai.expect,
    should = chai.should();

describe('ArgumentError', function () {

    var error: e.ArgumentError = null;

    before(function () {
        error = new e.ArgumentError('Invalid argument.', 'foo');
    });

    it('should have a non-empty message', function () {
        error.message.should.not.equal('');
        error.message.should.equal('Invalid argument.');
    });

    it('should have an argumentName property', function () {
        expect(error.argumentName).to.exist;
    });

    it('should have a non-empty argumentName', function () {
        error.argumentName.should.not.equal('');
        error.argumentName.should.equal('foo');
    });
});
