import React, {Fragment, useState} from 'react';
import {extractData, getUniqueKey} from "./utils";
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
        const getUKey = getUniqueKey();
        const getGroupUKey = getUniqueKey();
        const getDayUKey = getUniqueKey();
        const getUnitUKey = getUniqueKey();
        const getZoneUKey = getUniqueKey();

            return (
            <Fragment key={getGroupUKey()}>
                <tr key={getGroupUKey()} onClick={()=>onClick([iGroup])}>
                    <th key={getGroupUKey()}>{group.name}</th>
                    <td key={getGroupUKey()}>{group.duration_in}</td>

                </tr>
                {group.expand && group.days.map((day, iDay) => (
                    <Fragment key={getDayUKey()}>
                    <tr className={'visited-table__tr-day'} key={getDayUKey()} onClick={()=>onClick([iGroup, iDay])}>
                        <th>{day.name}</th>
                        <td>{day.duration_in}</td>
                    </tr>
                    {day.expand && day.units.map((unit, iUnit)=>(
                        <Fragment key={getUnitUKey()}>
                            <tr
                                className={'visited-table__tr-unit'}
                                key={getUnitUKey()}
                                onClick={()=>onClick([iGroup, iDay, iUnit])}>
                                <th>{unit.name}</th>
                                <td>{unit.duration_in}</td>
                            </tr>
                            {unit.expand && <tr key={getZoneUKey()} >
                                <td colSpan={2}>
                                    <table key={getZoneUKey()}>
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
                                        {unit.zones.map((zone, iZone)=>(
                                            <tr key={getZoneUKey()}>
                                                <th key={getZoneUKey()}>{zone.zone_name}</th>
                                                <td key={getZoneUKey()}>{zone.time_begin}</td>
                                                <td key={getZoneUKey()}>{zone.time_end}</td>
                                                <td key={getZoneUKey()}>{zone.duration_in}</td>
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