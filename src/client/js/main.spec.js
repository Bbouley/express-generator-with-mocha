var chai = require('chai');
var expect = chai.expect;
var clientMain = require('./main.js');

describe('testing main client', function() {

    it('should return hello + name', function() {
        var name = 'Bradley';
        var result = 'Hello Bradley'
        expect(clientMain.hello(name)).to.equal(result);
    })

})
