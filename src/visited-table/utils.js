export const getMs = (timeString) => {

    const times = timeString.split('days');
    const timePart = times[times.length - 1].trim();
    const dateString = '1970-01-01T';
    const utcPostfix = 'z';
    const time = timePart.length === 7 ? `0${timePart}` : timePart;
    const date = new Date(`${dateString}${time}${utcPostfix}`);

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
    // const day = hour * 24;
    // const days = Math.floor(ms / day);
    const hours = Math.floor(ms / hour);
    const minutes = Math.floor((ms % hour) / mn);
    const seconds = ((ms % hour) % mn) / sec;

    return `${getZero(hours)}h ${getZero(minutes)}min ${seconds}sec`;

};

const getZero = (num) => num.length < 2 ? `0${num}` : num ;

export const extractData = (data) => {

    const defaultExpand = true;
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
                expand: defaultExpand
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
                    units: [],
                    expand: defaultExpand,
                };
                group.days.push(day);
            }

            const unitName = unit.unit_name;
            let un = day.units.find((dayUnit) => dayUnit.name === unitName);
            if(!un){
                un = {
                    name: unitName,
                    zones:[],
                    duration_in: 0,
                    expand: defaultExpand,
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


    });
    groups.forEach((group)=>{
        group.days.sort((a,b)=>b.value-a.value);
        group.duration_in = getTimeItems( group.duration_in);
        group.days.forEach((day)=>{
            const d = new Date( day.value );
            day.name = `${Intl.DateTimeFormat().format(d)}`;
            day.duration_in = getTimeItems( day.duration_in );
            day.units.forEach((unit) => {
                unit.duration_in = getTimeItems( unit.duration_in );
            })
        })
    });
    return {
        all: getTimeItems(allTimeMs ),
        groups,
    }
};

export function getUniqueKey(){
    let key = 0;
    return ()=>`${key++}`;
}