'use strict';

//jshint expr: true
var chai = require('chai'),
	expect = chai.expect;

chai.should();

function isEvent(num) {
	return num % 2 === 0;
}

describe('isEven', function() {
	it('should return true when number is even', function() {
		isEvent(4).should.be.true;
	});

	it('should return false when number is odd', function() {
		expect(isEvent(3)).to.be.false;
	})
})

function add(num1, num2) {
	return num1 + num2;
}

describe('add without setup/teardown', function(){
	var num;
	beforeEach(function() {
		num = 5;
	});
	
	it('should be ten when adding 5 to 5', function() {
		num = add(num,5);
		num.should.equal(10);
	})

	it('should be twelve when adding 7 to 5', function() {
		add(num, 7).should.equal(12);
	})
})

var foo = 'bar';
describe.skip('examples', function() {
	it('should equal bar', function() {
		expect(foo).to.equal('bar');
	});
});