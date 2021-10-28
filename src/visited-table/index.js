import React, {Fragment, useState} from 'react';
import {extractData} from "./utils";
import './style.scss';
import {fullClone} from "../utils";
import data from "./data";


export default function VisitedTable() {

    const [content, setContent] = useState(extractData(data));

    const onClick = (indexes) => {
        const {groups} = fullClone(content);
        let expandedPart = groups[indexes.shift()];
        if(indexes.length){
            expandedPart = expandedPart.days[indexes.shift()];
            if(indexes.length){
                expandedPart = expandedPart.units[indexes.shift()];
            }
        }
        expandedPart.expand = !expandedPart.expand;
        setContent({...content, groups});
    };

    const rowsGroup = ( dt ) => dt.groups.map((group, iGroup) => {
            return (
            <Fragment key={iGroup.toString()}>
                <tr key={iGroup.toString()} onClick={()=>onClick([iGroup])}>
                    <th key={iGroup.toString() + 1}>{group.name}</th>
                    <td key={iGroup.toString() + 2}>{group.duration_in}</td>

                </tr>
                {group.expand && group.days.map((day, iDay) => (
                    <Fragment key={iDay.toString()}>
                    <tr className={'visited-table__tr-day'} key={iDay.toString()} onClick={()=>onClick([iGroup, iDay])}>
                        <th>{day.name}</th>
                        <td>{day.duration_in}</td>
                    </tr>
                    {day.expand && day.units.map((unit, iUnit)=>(
                        <Fragment key={iUnit.toString()}>
                            <tr
                                className={'visited-table__tr-unit'}
                                key={iUnit.toString()}
                                onClick={()=>onClick([iGroup, iDay, iUnit])}>
                                <th>{unit.name}</th>
                                <td>{unit.duration_in}</td>
                            </tr>
                            {unit.expand && <tr key={iUnit.toString() + 1} >
                                <td colSpan={2}>
                                    <table key={iUnit.toString() + 1}>
                                        <thead key={iUnit.toString()}>
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
                                        <tbody key={iUnit.toString() + 2}>
                                        {unit.zones.map((zone, iZone)=>(
                                            <tr key={iZone.toString()}>
                                                <th key={iZone.toString() + 1}>{zone.zone_name}</th>
                                                <td key={iZone.toString() + 2}>{zone.time_begin}</td>
                                                <td key={iZone.toString() + 3}>{zone.time_end}</td>
                                                <td key={iZone.toString() + 4}>{zone.duration_in}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>}
                        </Fragment>
                    ))}
                    </Fragment>
                ))}
            </Fragment>
            )
    });

    return (
        <div key={'wrapper'} className={'wrapper'}>
            <table className={'visited-table'} rules={'rows'} border={'1'}>
                <caption>Visited table</caption>
                <thead>
                    <tr key={'thead'}>
                        <th>Subject</th>
                        <th>Duration in</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={'content'}>
                        <th>All time</th>
                        <td>{content.all}</td>
                    </tr>
                    {content && rowsGroup(content)}
                </tbody>
            </table>
        </div>
    );
}