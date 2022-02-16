import React, {Fragment, useState} from "react";
import jsonData from './data';
import {parseObject} from "./utils";
import {fullClone} from "../utils";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let sum = 0;
    const ratio = 2;

    sum = parseObject(jsonData, ratio);

    function extractData(data) {
        return data;
    }

    const [content, setContent] = useState(extractData(fullClone(jsonData)));


    //////////////////////////CONSOLE//////////////////////////
    /// TODO: path: "src/smeta2/index.jsx" line "54", time: "22:16:8:273"'
    if (process && process.env.MODE_ENV !== 'production') {
        const clr1 = 'color: #747678';
        const clr = 'color: #72b8f5';
        console.group('%c path: "src/smeta2/index.jsx", line: "54", time: "22:16:8:273"', clr1);
        console.info('%c jsonData: ', clr, (jsonData));
        // console.info('%c JSON,parseObject(jsonData): ', clr, JSON.stringify(jsonData) );
        //console.info('this: ', this );
        //console.table( this );
        console.groupEnd();
    }
    ////////////////////////END CONSOLE////////////////////////


    const hours = Math.round(sum);
    const hoursToOne = Math.round(sum / 3);
    const daysToOne = Math.round(hoursToOne / 8);

    function rowsGroup(content) {
        return false;
    }

    return (
        <Fragment>
            <div>{`All time: ${hours} hr`}</div>
            <div>{`Time to one employee: ${hoursToOne} hr`}</div>
            <div>{`Days to one employee: ${daysToOne} d`}</div>
            <div className={'wrapper'}>
                <table className={'visited-table'} rules={'rows'} border={'1'}>
                    <caption>Visited table</caption>
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Duration in</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>All time</th>
                        <td>{content.all}</td>
                    </tr>
                    {content && rowsGroup(content)}
                    </tbody>
                </table>
            </div>
        </Fragment>

    )

}