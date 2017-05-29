import {add} from '../math.js';

describe('addition', function () {
    it('1 + 1 = 2', function () {
        const expected = 2;
        expect(add(1, 1)).to.equal(expected);
    });
});
