import React, {Fragment} from "react";
import data from "./data";
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{

    let summ  = 0;
    const ratio = 2.3;
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
            } else if(typeof arg === "object"){
                if( arg.hasOwnProperty('duration') === false ){
                    /*if( arg.hasOwnProperty('subtotal')){

                    }else{
                        arg.subtotal = 0;
                    }*/
                }

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