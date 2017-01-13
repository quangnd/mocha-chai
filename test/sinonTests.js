'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

chai.should();

describe('sinon tests', function() {
    var student;
    beforeEach(function() {
        student = {
            dropClass: function(classId, cb) {
                cb();
            }
        }
    });

    describe('student.dropClass', function() {
        it('should call the callback', function(){
            var spy = sinon.spy();
            student.dropClass(1, spy);
            spy.called.should.be.true;

        });

        it('should call the callback and log to the console', function() {
            function onClassDropped() {
                console.log('onClassDropped was called!');
            }

            var spy = sinon.spy(onClassDropped);

            student.dropClass(1, spy);
            spy.called.should.be.true;
        })
    })

})