import chai = require('chai');
import e = require('../lib/errors');

const expect = chai.expect;
chai.should();

describe('ArgumentError', function (): void {

    let error: e.ArgumentError = null;

    before(function (): void {
        error = new e.ArgumentError('Invalid argument.', 'foo');
    });

    it('should have a non-empty message', function (): void {
        error.message.should.not.equal('');
        error.message.should.equal('Invalid argument.');
    });

    it('should have an argumentName property', function (): void {
        expect(error.argumentName).to.exist;
    });

    it('should have a non-empty argumentName', function (): void {
        error.argumentName.should.not.equal('');
        error.argumentName.should.equal('foo');
    });
});
