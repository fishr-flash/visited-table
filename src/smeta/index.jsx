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
        let subsumm = 0;
        for (const key in arg) {
            if( key === 'duration'){
                summ += arg[key]
            } else if( Array.isArray( arg[key] ) ){
                excludeArray(arg[key])
            } else if(typeof arg === "object"){
                if( arg.hasOwnProperty('duration') === false ){
                    if( arg.hasOwnProperty('subtotal')){

                    }else{
                        arg.subtotal = 0;
                    }
                }

                //////////////////////////CONSOLE//////////////////////////
                /// TODO: path: "src/smeta/index.jsx" line "34", time: "15:23:54:455"'
                if( process && process.env.MODE_ENV !== 'production' ){
                    const clr1 = 'color: #747678';
                    const clr = 'color: #72b8f5';
                    console.group( '%c path: "src/smeta/index.jsx", line: "34", time: "15:23:54:455"', clr1);
                    console.info('%c Object.hasOwnProperty(\'duration\'): ', clr, arg.hasOwnProperty('duration') );
                    console.info('arg: ', this, arg );
                    //console.table( this );
                    console.groupEnd();
                }
                ////////////////////////END CONSOLE////////////////////////
                // excludeObject(arg)
            }

        }

    }

    excludeObject( data )

    summ *= ratio;

    const hours = Math.round(summ );
    const hoursToOne = Math.round(summ / 3 );
    const daysToOne = Math.round(hoursToOne / 8 );

    return(
        <Fragment>
            <div>{`All time: ${hours} hr`}</div>
            <div>{`Time to one employee: ${hoursToOne} hr`}</div>
            <div>{`Days to one employee: ${daysToOne } d`}</div>
        </Fragment>

    )

}