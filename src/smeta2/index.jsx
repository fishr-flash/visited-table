import React, {Fragment, useState} from "react";
import jsonData from './data_2';
import {calculateTimes} from "./utils";
import {fullClone} from "../utils";
import './style.scss';

export const DEFAULT_EXPAND = false;
export const RATIO = 2;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let sum=0;

    sum = calculateTimes(jsonData, RATIO);

    const [content, setContent] = useState(fullClone(jsonData));
    const countDevelopers = 1;
    const hours = Math.round(sum);
    const hoursToOne = Math.round(sum / countDevelopers);
    const daysToOne = Math.round(hoursToOne / 8);
    const monthsToOne = Number( hoursToOne / 8 / 24 ).toFixed( 1);

    let keyIndex = 0;

    function onClick(e, contentNode) {
        contentNode.expand = !contentNode.expand;
        setContent(fullClone(content));
    }

    function rowsGroup(content) {
        ++keyIndex;
        return (
            <Fragment>
                {Object.keys(content).map((key) => {
                        const item = content[key];
                        return Array.isArray(item) && content.expand ?
                            <tr key={`tr1${key}${keyIndex}`}>
                                <td colSpan={2} key={`rd${key}${keyIndex}`}>
                                    <table
                                        className={`visited-table ${key}`}
                                        key={`table1${key}${keyIndex}`}
                                    >
                                        <thead key={`thead${key}${keyIndex}`}>
                                        <tr>
                                            <th className={'visited-table__placeholder-th'}></th>
                                            <th className={'visited-table__placeholder-td'}></th>
                                        </tr>
                                        <tr key={`trr${key}${keyIndex}`}>
                                            <th className={'visited-table_caption'} colSpan={2}>{key}</th>
                                        </tr>

                                        </thead>
                                        <tbody key={`tbody1${key}${keyIndex}`}>
                                        {++keyIndex && item.map((v) => rowsGroup(v))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            :
                            key === 'name' ? (
                                <tr
                                    style={{width: '100%'}}
                                    onClick={(e) => onClick(e, content)}
                                    key={`tr3${key}${keyIndex}`}
                                    className={'visited-table'}>
                                    <th style={{width: '90%'}}>{content.name}</th>
                                    <td style={{
                                        width: '10%',
                                        textAlign: 'center'
                                    }}>{content.subTotal ? `~${content.subTotal}` : content.hours}</td>
                                </tr>
                            ) : null;
                    }
                )}
            </Fragment>)

    }

    return (
        <Fragment>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <div>{`All time: ${hours} hr`}</div>
                    <div>{`Time to one employee: ${hoursToOne} hr`}</div>
                    <div>{`Days to one employee: ${daysToOne} d`}</div>
                    <div>{`Months to one employee: ${monthsToOne} m`}</div>
                </div>
                <div className={'remark'}>
                    <p>Без учета:</p>
                    <br />
                    <lu>
                        <li>Взаимодействия с мидл слоем</li>
                        <li>Периодов проведения ИФТ и ПСИ</li>
                    </lu>
                </div>
            </div>

            <div className={'wrapper'}>
                <table className={'visited-table'} rules={'rows'} border={'1'}>
                    <caption>Оценка объема чел/часов</caption>
                    <thead>
                    <tr>
                        <th>Наименование</th>
                        <th style={{width: '10%', textAlign: 'center'}}>Время</th>
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