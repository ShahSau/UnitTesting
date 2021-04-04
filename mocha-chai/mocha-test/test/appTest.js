const assert = require('chai').assert;
// const sayHello= require('../app').sayHello;
// const addNumbers= require('../app').addNumbers;
const App = require('../app');


describe('App', function () {
    it('app should return', function(){
        let result =App.sayHello();
        assert.equal(result, 'Hello world')
    });
    it('sayHello should return type string', function(){
        assert.typeOf(App.sayHello(), 'string');
    });
    it('addNumber should return a number', function(){
        assert.typeOf(App.addNumbers(2,3), 'number')
    });
    it('addNumber should be greater than 5', function(){
        assert.isAbove(App.addNumbers(5,3), 5)
    })
})
