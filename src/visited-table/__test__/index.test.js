import {getMs, getTimeItems, getUniqueKey} from "../utils";

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

        const time = '1 days 2:30:02';
        const allTimeMs = 910586000;
        expect(allTimeMs + getMs(time)).toBe(1005988000)

    });

    it('getStringTime', function () {

        const times =[
            [ 1000 * 60, {"days": "0", "hours": "0", "minutes": "1", "seconds": 0} ],
            [ 1000 * 60 * 60, {"days": "0", "hours": "1", "minutes": "0", "seconds": 0} ],
            [1000 * 60 * 60 * 24,{"days": "1", "hours": "0", "minutes": "0", "seconds": 0} ],
            [1000 * 60 * 60 * 24 + 1000,{"days": "1", "hours": "0", "minutes": "0", "seconds": 1} ],
        ];
        const allTimeMs = 910586000;

        expect(getTimeItems(allTimeMs)).toStrictEqual({"days": "11", "hours": "13", "minutes": "56", "seconds": 26});

        times.forEach((v) => {
            expect(getTimeItems(v[0])).toStrictEqual(v[1]);
        })


    });

    it('how time of duration in 1415000', function () {

        const allTimeMs = 1415000;

        expect(getTimeItems(allTimeMs)).toStrictEqual({"days": "0", "hours": "0", "minutes": "24", "seconds": 35});
    });

    it('getUniqueKey', function () {

        const getUKey = getUniqueKey();
        /////////////////////////////CONSOLE/////////////////////////////////////
            ///TODO: Console log in the code "INDEX_TEST_JS" line 60
            if( true ){
                console.group( 'Console log in the code "INDEX_TEST_JS" line 60' );
                console.info( 'getUKey(): ', getUKey() );
                console.info( 'getUKey(): ', getUKey() );
                console.info( 'getUKey(): ', getUKey() );
                console.info( 'this: ', this );
                //console.table( this );
                console.groupEnd();
            }
        /////////////////////////////END CONSOLE/////////////////////////////////
    });
});