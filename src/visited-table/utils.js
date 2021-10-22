
export const getMs = (timeString)=>{

    const times = timeString.split( 'days');
    const timePart = times[times.length - 1].trim();
    const dateString = '1970-01-01T';
    const utfPostfix = 'z';
    const time = timePart.length === 7 ? `0${timePart}` : timePart;
    const date =  new Date(`${dateString}${time}${utfPostfix}`);

    if( times.length > 1){

        const day = new Date(0);
        const daySeconds = day.setUTCHours( times[0].trim() * 24 );
        return date.getTime() + daySeconds;
    }
    return date.getTime();

};

export const getTimeItems = (ms ) =>{
    const sec = 1000;
    const mn = sec * 60;
    const hour = mn * 60;
    const day = hour * 24;

    const days = ( ms / day ).toFixed(0);
    const hours = ( ( ms % day ) / hour ).toFixed(0);
    const minutes = ( ( ( ms % day ) % hour ) / mn ).toFixed(0);
    const seconds =  (( ( ms % day ) % hour ) % mn) / sec;

    return {
        days,
        hours,
        minutes,
        seconds
    }

};


export const extractData = (data) => {

    const startDate = new Date();
    let allTimeMs = 0;
    data.forEach((unit) => {
        unit.data.forEach((unitData) =>{
            allTimeMs += getMs(unitData.duration_in)
        })
    })

    /////////////////////////////CONSOLE/////////////////////////////////////
        ///TODO: Console log in the code "UTILS_JS" line 32
        if( process && process.env.NODE_ENV === 'development' ){
            console.group( 'Console log in the code "UTILS_JS" line 32' );
            console.info( 'startDate - new Date(): ', startDate - new Date() );
            console.info( 'this: ', this );
            console.info( 'allTimeMs: ', allTimeMs );
            console.info( 'getTimeItems( allTimeMs): ', getTimeItems( allTimeMs) );
            //console.table( this );
            console.groupEnd();
        }
    /////////////////////////////END CONSOLE/////////////////////////////////

};

