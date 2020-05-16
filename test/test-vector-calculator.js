const assert = require('assert');
const VectorCalculator = require('../app/models/VectorCalculator');

describe('Vector calculator tests', () => {
    let v1 = {x: 4, y: 3};
    let v2 = {x: 1, y: 3};
    let scale = 5.0;

    describe('Sum', () => {
        it('Should sum the vectors',() => {
            assert.deepEqual({x: 5, y: 6}, VectorCalculator.sum(v1, v2));
        });
    });
    
    describe('Substract', () => {
        it('Should substract the vectors',() => {
            assert.deepEqual({x: 3, y: 0}, VectorCalculator.sub(v1, v2));
        });
    });
    
    describe('Scale', () => {
        it('Should scale a vector',() => {
            assert.deepEqual({x: 20, y: 15}, VectorCalculator.scalar(v1, scale));
        });
    });
    
    describe('Dot', () => {
        it('Should make a dot product of the vectors',() => {
            assert.equal(13, VectorCalculator.dot(v1, v2));
        });
    });
});