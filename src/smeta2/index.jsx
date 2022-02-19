import React, {Fragment, useState} from "react";
import jsonData from './data';
import {calculateTimes} from "./utils";
import {fullClone} from "../utils";

export const DEFAULT_EXPAND = true;
export const RATIO = 2;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let sum = 0;

    sum = calculateTimes(jsonData, RATIO);

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
        console.info('%c content: ', clr, (content));
        // console.info('%c JSON,parseObject(jsonData): ', clr, JSON.stringify(jsonData) );
        //console.info('this: ', this );
        //console.table( this );
        console.groupEnd();
    }
    ////////////////////////END CONSOLE////////////////////////


    const hours = Math.round(sum);
    const hoursToOne = Math.round(sum / 3);
    const daysToOne = Math.round(hoursToOne / 8);

    let keyIndex = 0;

    function rowsGroup(content) {
        //////////////////////////CONSOLE//////////////////////////
        /// TODO: path: "src/smeta2/index.jsx" line "47", time: "0:34:27:182"'
        if (process && process.env.MODE_ENV !== 'production') {
            const clr1 = 'color: #747678';
            const clr = 'color: #72b8f5';
            console.group('%c path: "src/smeta2/index.jsx", line: "47", time: "0:34:27:182"', clr1);
            console.info('%c content.expand: ', clr, content.expand);
            //console.info('this: ', this );
            //console.table( this );
            console.groupEnd();
        }
        ////////////////////////END CONSOLE////////////////////////
        return (
            <Fragment>
                {Object.keys(content).map((key) => {
                        const item = content[key];
                        return Array.isArray(item) ?
                            <Fragment>
                                <tr>
                                    <td colSpan={2}>
                                        { item.map((v) => rowsGroup(v)) }
                                    </td>
                                </tr>
                            </Fragment>
                             :
                        key === 'name' ?  (
                            <tr key={`${keyIndex}`} className={'visited-table__tr-day'}>
                                <th>{content.name}</th>
                                <td>{content.subTotal ? content.subTotal : content.hours}</td>
                            </tr>
                        ): null;
                    }
                )}

                {/*<tr key={`${keyIndex}`} className={'visited-table__tr-unit'}>
                    <th>{content.name}</th>
                    <td>{''}</td>
                    <td>{content.subTotal ? content.subTotal : content.hours}</td>
                </tr>*/}

            </Fragment>)

    }

    return (
        <Fragment>
            <div>{`All time: ${hours} hr`}</div>
            <div>{`Time to one employee: ${hoursToOne} hr`}</div>
            <div>{`Days to one employee: ${daysToOne} d`}</div>
            <div className={'wrapper'}>
                <table className={'visited-table'} rules={'rows'} border={'1'}>
                    <caption>Оценка объема чел/часов</caption>
                    <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Время</th>
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