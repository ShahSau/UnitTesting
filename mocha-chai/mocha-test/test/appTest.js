const assert = require('chai').assert;
const app = require('../app');



describe('App', function () {
    it('app should return', function(){
        assert.equal(app(), 'Hello World')
    })
})
