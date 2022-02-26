import React, {Fragment, useState} from "react";
import jsonData from './data';
import {calculateTimes} from "./utils";
import {fullClone} from "../utils";
import './style.scss';

export const DEFAULT_EXPAND = false;
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

    function onClick(e, contentNode) {

        /*const childs = e.currentTarget.parentNode.childNodes;
        for (let i = 1; i < childs.length; i++) {
            if( !childs[i].style.display || childs[i].style.display === 'initial'){
                childs[i].style.display = 'none';
            } else {
                childs[i].style.display = 'initial';
            }


        }*/
        // e.target.style.display = 'none';
        contentNode.expand = !contentNode.expand;
        //////////////////////////CONSOLE//////////////////////////
        /// TODO: path: "src/smeta2/index.jsx" line "61", time: "22:52:44:536"'
        if( process && process.env.MODE_ENV !== 'production' ){
            const clr1 = 'color: #747678';
            const clr = 'color: #72b8f5';
            console.group( '%c path: "src/smeta2/index.jsx", line: "61", time: "22:52:44:536"', clr1);
            console.info('%c content: ', clr, content );
            console.info('%c contentNode: ', clr, contentNode );
            //console.info('this: ', this );
            //console.table( this );
            console.groupEnd();
        }
        ////////////////////////END CONSOLE////////////////////////
        setContent(fullClone( content ));
    }

    function rowsGroup(content) {

        return (
            <Fragment>
                {Object.keys(content).map((key) => {
                        const item = content[key];
                        return Array.isArray(item) && content.expand ?
                            <tr>
                                <td colSpan={2}>
                                    <table style={{tableLayout: 'fixed'}} className={`visited-table ${key}`}>
                                        <thead>
                                        <tr>
                                            <th className={'visited-table_caption'} colSpan={2}>{key}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {item.map((v) => rowsGroup(v))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            :
                            key === 'name' ? (
                                <tr
                                    style={{width: '100%'}}
                                    onClick={(e) => onClick(e, content)}
                                    key={`${keyIndex}`}
                                    className={'visited-table'}>
                                    <th style={{width: 'inherit'}}>{content.name}</th>
                                    <td style={{width: 'inherit'}}>{content.subTotal ? `~${content.subTotal}` : content.hours}</td>
                                </tr>
                            ) : null;
                    }
                )}
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
                    {content && rowsGroup(content)}
                    </tbody>
                </table>
            </div>
        </Fragment>

    )

}