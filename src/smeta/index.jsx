import React, {Fragment} from "react";
import data from "./data";
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{

    let summ  = 0;
    const ratio = 2.3;

    //////////////////////////CONSOLE//////////////////////////
    /// TODO: path: "src/smeta/index.jsx" line "10", time: "8:12:43:901"'
    if( process && process.env.MODE_ENV !== 'production' ){
        const clr1 = 'color: #747678';
        const clr = 'color: #72b8f5';
        console.group( '%c path: "src/smeta/index.jsx", line: "10", time: "8:12:43:901"', clr1);
        console.info('%c data: ', clr, data );
        //console.info('this: ', this );
        //console.table( this );
        console.groupEnd();
    }
    ////////////////////////END CONSOLE////////////////////////
    const excludeArray = (arr) => {
        arr.forEach( (v) => {
            if( typeof v === 'object') excludeObject(v);
        })
    }
    const excludeObject = (arg) =>{
        for (const key in arg) {
            if( key === 'duration'){
                summ += arg[key]
            } else if( Array.isArray( arg[key] ) ){
                excludeArray(arg[key])
            }

        }

    }

    excludeObject( data )




    summ *= ratio;
    return(
        <Fragment>
            <div>{`All time: ${summ} hr`}</div>
            <div>{`Time to one employee: ${summ / 3} hr`}</div>
            <div>{`Days to one employee: ${( summ / 3 ) / 8 } hr`}</div>
        </Fragment>

    )

}