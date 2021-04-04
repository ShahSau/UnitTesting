const assert = require('chai').assert;
// const sayHello= require('../app').sayHello;
// const addNumbers= require('../app').addNumbers;
const App = require('../app');


describe('App', function () {
    Result_sayHello= App.sayHello();
    Result_add = App.addNumbers(6,3);
    describe('sayhello',function(){
    it('app should return', function(){
        // let result =App.sayHello();
        assert.equal(Result_sayHello, 'Hello world')
    });
    it('sayHello should return type string', function(){
        assert.typeOf(Result_sayHello, 'string');
    });
})
describe('addnumber',function(){
    it('addNumber should return a number', function(){
        assert.typeOf(Result_add, 'number')
    });
    it('addNumber should be greater than 5', function(){
        assert.isAbove(Result_add, 5)
    })
})
})
