import {getMs} from "../utils";

describe('users page', () => {
    it('.setItem, choosing a different roleId', function () {
        const a = 'a';
        expect(a).toBe('a')
    });

    it('how big int', function () {
        const a = 910586000;
        const b = 9002000;
        expect(a + b).toBe(919588000)
    });

    it('test getMs', function () {

        const time = '2:30:02';
        const allTimeMs = 910586000;
        expect(allTimeMs + getMs(time)).toBe(919588000)

    });

    it('parse days', function () {

        const time = '2:30:02';
        const allTimeMs = 910586000;
        expect(allTimeMs + getMs(time)).toBe(time)

    })
});