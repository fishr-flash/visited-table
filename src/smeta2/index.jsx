import React, {Fragment} from "react";
import jsonData from './data';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let sum = 0;
    const ratio = 2.3;

    /*const jsonData = {
        screens: [
            {
                name: 'Screen 1',
                duration: 1,
            },
            {
                name: 'Screen 1',
                duration: 1,
            },

        ]
    }*/

    const parseArr = (arr) => {
        let subTotal = 0;
        arr.forEach((v) => {
            subTotal += parseObject(v);
        });
        return subTotal;
    }

    const parseObject = (obj) => {
        let subTotal = 0;
        for (const objKey in obj) {
            //////////////////////////CONSOLE//////////////////////////
            /// TODO: path: "src/smeta2/index.jsx" line "35", time: "22:45:4:678"'
            if( process && process.env.MODE_ENV !== 'production' ){
                const clr1 = 'color: #747678';
                const clr = 'color: #72b8f5';
                console.group( '%c path: "src/smeta2/index.jsx", line: "35", time: "22:45:4:678"', clr1);
                console.info('%c objKey: ', clr, objKey );
                console.info('%c obj[objKey]: ', clr, obj[objKey] );
                //console.info('this: ', this );
                //console.table( this );
                console.groupEnd();
            }
            ////////////////////////END CONSOLE////////////////////////
            if( Array.isArray(obj[objKey])){
                subTotal += parseArr(obj[objKey]);
            }else if( obj[objKey].hasOwnProperty('duration')){
                subTotal += obj[objKey].duration;
            }
        }

        return subTotal;
    }

    //////////////////////////CONSOLE//////////////////////////
    /// TODO: path: "src/smeta2/index.jsx" line "54", time: "22:16:8:273"'
    if (process && process.env.MODE_ENV !== 'production') {
        const clr1 = 'color: #747678';
        const clr = 'color: #72b8f5';
        console.group('%c path: "src/smeta2/index.jsx", line: "54", time: "22:16:8:273"', clr1);
        console.info('%c parseObject(jsonData.screens[0]);: ', clr, parseObject(jsonData) );
        //console.info('this: ', this );
        //console.table( this );
        console.groupEnd();
    }
    ////////////////////////END CONSOLE////////////////////////


    const hours = Math.round(sum);
    const hoursToOne = Math.round(sum / 3);
    const daysToOne = Math.round(hoursToOne / 8);

    return (
        <Fragment>
            <div>{`All time: ${hours} hr`}</div>
            <div>{`Time to one employee: ${hoursToOne} hr`}</div>
            <div>{`Days to one employee: ${daysToOne} d`}</div>
        </Fragment>

    )

}