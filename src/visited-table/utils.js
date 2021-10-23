export const getMs = (timeString) => {

    const times = timeString.split('days');
    const timePart = times[times.length - 1].trim();
    const dateString = '1970-01-01T';
    const utfPostfix = 'z';
    const time = timePart.length === 7 ? `0${timePart}` : timePart;
    const date = new Date(`${dateString}${time}${utfPostfix}`);

    if (times.length > 1) {

        const day = new Date(0);
        const daySeconds = day.setUTCHours(times[0].trim() * 24);
        return date.getTime() + daySeconds;
    }
    return date.getTime();

};

export const getTimeItems = (ms) => {
    const sec = 1000;
    const mn = sec * 60;
    const hour = mn * 60;
    const day = hour * 24;

    const days = (ms / day).toFixed(0);
    const hours = ((ms % day) / hour).toFixed(0);
    const minutes = (((ms % day) % hour) / mn).toFixed(0);
    const seconds = (((ms % day) % hour) % mn) / sec;

    return {
        days,
        hours,
        minutes,
        seconds
    }

};


export const extractData = (data) => {

    const startDate = new Date();
    const groups = [];
    let allTimeMs = 0;
    data.forEach((unit) => {
        const groupName = unit.group_name;
        let group = groups.find(g => g.name === groupName);
        if (!group) {
            group = {
                name: groupName,
                duration_in: 0,
                days: [],
            };
            groups.push(group)
        }
        unit.data.forEach((unitData) => {

            const ms = getMs(unitData.duration_in);
            const timeBegin = new Date(unitData.time_begin.split(' ')[0]).getTime();

            let day = group.days.find(d => d.value === timeBegin);
            if (!day) {
                day = {
                    value: timeBegin,
                    duration_in: 0,
                    units: []
                };
                group.days.push(day);
            }

            const unitName = unit.unit_name;
            let un = day.units.find((dayUnit) => dayUnit.name === unitName);
            if(!un){
                un = {
                    name: unitName,
                    zones:[],
                    duration_in: 0
                };

                day.units.push(un);
            }
            un.zones.push({
                zone_name: unitData.zone_name,
                time_begin: unitData.time_begin,
                time_end: unitData.time_end,
                duration_in: unitData.duration_in,
            });
            day.duration_in += ms;
            group.duration_in += ms;
            un.duration_in += ms;
            allTimeMs += ms;

        })
    })

    /////////////////////////////CONSOLE/////////////////////////////////////
    ///TODO: Console log in the code "UTILS_JS" line 32
    if (process && process.env.NODE_ENV === 'development') {
        console.group('Console log in the code "UTILS_JS" line 32');
        console.info('startDate - new Date(): ', startDate - new Date());
        console.info('this: ', this);
        console.info('allTimeMs: ', allTimeMs);
        console.info('getTimeItems( allTimeMs): ', getTimeItems(allTimeMs));
        console.info('groups: ', groups);
        console.info('JSON.stringify(groups)): ', JSON.stringify(groups));
        //console.table( this );
        console.groupEnd();
    }
    /////////////////////////////END CONSOLE/////////////////////////////////

};

