import React, {Fragment, useEffect, useState} from "react";
import jsonDataShort from './data_3_short';
import jsonDataLong from './data_3_long';
import {calculateTimes} from "./utils";
import {fullClone} from "../utils";
import './style.scss';
import RedComment from "./parts/red-comment";
import RedComment3 from "./parts/red-comment-3";

export const DEFAULT_EXPAND = false;
export const RATIO = 2;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let sum = 0;

    sum = calculateTimes(jsonDataShort, RATIO);

    const VERSIONS = {
        LONG:'Custom Calendar',
        SHORT: 'Plugin Calendar'
    }
    const [content, setContent] = useState(fullClone(jsonDataShort));
    const countDevelopers = 1;
    const [hours, setHours] = useState( Math.round(sum));
    const [ hoursToOne, setHoursToOne ] = useState(Math.round(sum / countDevelopers) );
    const [daysToOne, setDaysToOne ] = useState(Math.round(hoursToOne / 8) );
    const [ monthsToOne, setMonthsToOne ] = useState( Number( hoursToOne / 8 / 24 ).toFixed( 1) );

    let keyIndex = 0;

    function onClick(e, contentNode) {
        contentNode.expand = !contentNode.expand;
        setContent(fullClone(content));
    }

    function onClickVersion(newLink) {
        if( newLink === VERSIONS.LONG ){
            sum = calculateTimes(jsonDataLong, RATIO);
            setContent(fullClone(jsonDataLong));
        } else {
            sum = calculateTimes(jsonDataShort, RATIO);
            setContent(fullClone(jsonDataShort));
        }

        setHours( Math.round(sum) );
        setHoursToOne( Math.round(sum / countDevelopers) );
        setDaysToOne( Math.round(sum / 8 / countDevelopers) );
        setMonthsToOne( Number( sum / 8 / 24 / countDevelopers ).toFixed( 1) );
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
                    <RedComment3 />
            </div>

            <div className={'wrapper'}>
                <br />
                <br />
                <table className={'visited-table'} rules={'rows'} border={'1'}>
                    <caption>Преварительная оценка Сервис Бронирования &nbsp;
                        <a href={'#'} onClick={(e)=>onClickVersion(e.target.text)} >
                            {VERSIONS.LONG}
                        </a> /
                        <a href={'#'} onClick={(e)=>onClickVersion(e.target.text)} >
                            {VERSIONS.SHORT}
                        </a>
                    </caption>
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