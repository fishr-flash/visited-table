import React, {useState} from 'react';
import {getTimeItems} from "./utils";
import './style.scss';
import {fullClone} from "../utils";


export default function VisitedTable() {

    //extractData(data);

    const fish = {
        allTime: 0,
        groups: [
            {
                name: "[Group 1]",
                duration_in: 6233458000,
                expand: true,
                days: [
                    {
                        value: 1589068800000,
                        duration_in: 1048890000,
                        expand: true,
                        units: [
                            {
                                name: "Nils Boehm DVM_754",
                                expand: false,
                                zones: [
                                    {
                                        zone_name: "Lastochkino",
                                        time_begin: "2020-05-10 07:51:02",
                                        time_end: "2020-05-11 03:49:30",
                                        duration_in: "19:58:28"
                                    }
                                ],
                                duration_in: 71908000
                            },{
                                name: "Nils Boehm DVM_754",
                                expand: true,
                                zones: [
                                    {
                                        zone_name: "Lastochkino",
                                        time_begin: "2020-05-10 07:51:02",
                                        time_end: "2020-05-11 03:49:30",
                                        duration_in: "19:58:28"
                                    }
                                ],
                                duration_in: 71908000
                            },{
                                name: "Nils Boehm DVM_754",
                                expand: false,
                                zones: [
                                    {
                                        zone_name: "Lastochkino",
                                        time_begin: "2020-05-10 07:51:02",
                                        time_end: "2020-05-11 03:49:30",
                                        duration_in: "19:58:28"
                                    }
                                ],
                                duration_in: 71908000
                            },
                        ]
                    },{
                        value: 1589068800000,
                        duration_in: 1048890000,
                        expand: false,
                        units: [
                            {
                                name: "Nils Boehm DVM_754",
                                expand: false,
                                zones: [
                                    {
                                        zone_name: "Lastochkino",
                                        time_begin: "2020-05-10 07:51:02",
                                        time_end: "2020-05-11 03:49:30",
                                        duration_in: "19:58:28"
                                    }
                                ],
                                duration_in: 71908000
                            },
                        ]
                    },
                ]
            },
        ]
    };


    const [content, setContent] = useState(fish);

    const onClick = (indexes) => {
        const {groups} = fullClone(content);
        let expandedPart = groups[indexes.shift()];
        if(indexes.length){
            expandedPart = expandedPart.days[indexes.shift()];
            if(indexes.length){
                expandedPart = expandedPart.units[indexes.shift()];
            }
        }
        /////////////////////////////CONSOLE/////////////////////////////////////
        ///TODO: Console log in the code "INDEX_JS" line 13
        if (process && process.env.NODE_ENV === 'development') {
            console.group('Console log in the code "INDEX_JS" line 13');
            console.info('this: ', 'hello');
            console.info('indexes: ', indexes);
            console.info('expandedPart: ', expandedPart);
            console.info('this: ', this);
            //console.table( this );
            console.groupEnd();
        }
        /////////////////////////////END CONSOLE/////////////////////////////////
        expandedPart.expand = !expandedPart.expand;
        setContent({...content, groups});

    };


    /////////////////////////////CONSOLE/////////////////////////////////////
    ///TODO: Console log in the code "INDEX_JS" line 79
    if (process && process.env.NODE_ENV === 'development') {
        console.group('Console log in the code "INDEX_JS" line 79');
        console.info('content: ', content);
        console.info('this: ', this);
        //console.table( this );
        console.groupEnd();
    }
    /////////////////////////////END CONSOLE/////////////////////////////////

    const rowsGroup = ( dt ) => dt.groups.map((group, iGroup) => {
            return (
            <>
                <tr key={iGroup.toString()} onClick={()=>onClick([iGroup])}>
                    <th>{group.name}</th>
                    <td>{group.duration_in}</td>

                </tr>
                {group.expand && group.days.map((day, iDay) => (
                    <>
                    <tr onClick={()=>onClick([iGroup, iDay])}>
                        <th>{day.value}</th>
                        <td>{day.duration_in}</td>
                    </tr>
                    {day.expand && day.units.map((unit, iUnit)=>(
                        <>
                            <tr onClick={()=>onClick([iGroup, iDay, iUnit])}>
                                <th>{unit.name}</th>
                                <td>{unit.duration_in}</td>
                            </tr>
                            {unit.expand && <tr>
                                <td colSpan={2}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>
                                                Zone name
                                            </th>
                                            <th>
                                                Time begin
                                            </th>
                                            <th>
                                                Time end
                                            </th>
                                            <th>
                                                Duration in
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {unit.zones.map((zone)=>(
                                            <tr>
                                                <th>{zone.zone_name}</th>
                                                <td>{zone.time_begin}</td>
                                                <td>{zone.time_end}</td>
                                                <td>{zone.duration_in}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>}
                        </>
                    ))}
                    </>
                ))}
            </>
            )
    });

    return (
        <div className={'wrapper'}>
            <table className={'visited-table'}>
                <caption>Visited table</caption>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Duration in</th>
                    </tr>
                </thead>
                <tbody>
                    {content && rowsGroup(content)}
                </tbody>
            </table>
            {/*<table className={'visited-table'}>
                <caption>Visited table</caption>
                <tbody>
                <tr>
                    <th scope={'row'}>
                        Всего вермени
                    </th>
                    <td>
                        {JSON.stringify(getTimeItems(7972942000))}
                    </td>
                </tr>
                <tr onClick={() => onClick()}>
                    <th scope={'row'}>
                        [Group 1]
                    </th>
                    <td>
                        {JSON.stringify(getTimeItems(6233458000))}
                    </td>                </tr>
                <tr>
                    <th>
                        {new Date(1589068800000).toString()}
                    </th>
                    <td>
                        {JSON.stringify(getTimeItems(1048890000))}
                    </td>
                </tr>
                <tr>
                    <th>
                        {new Date(1588982400000).toString()}
                    </th>
                    <td>
                        {JSON.stringify(getTimeItems(1274486000))}
                    </td>
                </tr>
                <tr>
                    <th>
                        Nils Boehm DVM_754
                    </th>
                    <td>
                        {JSON.stringify(getTimeItems(71908000))}
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    Zone name
                                </th>
                                <th>
                                    Time begin
                                </th>
                                <th>
                                    Time end
                                </th>
                                <th>
                                    Duration in
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>
                                    Lastochkino
                                </th>
                                <td>
                                    2020-05-10 07:51:02
                                </td>
                                <td>
                                    2020-05-11 03:49:30
                                </td>
                                <td>
                                    19:58:28
                                </td>
                            </tr>
                            </tbody>


                        </table>
                    </td>
                </tr>
                <tr>
                    <th>
                        {new Date(1589155200000).toString()}
                    </th>
                    <td>
                        {JSON.stringify(getTimeItems(1015048000))}
                    </td>
                </tr>
                <tr>
                    <th scope={'row'}>
                        [Group_Maintaner]
                    </th>
                    <td>
                        {JSON.stringify(getTimeItems(1739484000))}
                    </td>
                </tr>
                </tbody>
            </table>*/}
        </div>
    );
}