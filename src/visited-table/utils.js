
export const getMs = (timeString)=>{

    const dateString = '1970-01-01T';
    const utfPostfix = 'z';
    const time = timeString.length === 7 ? `0${timeString}` : timeString;
    const date =  new Date(`${dateString}${time}${utfPostfix}`);

    return date.getTime();

}


export const extractData = (data) => {

    let allTimeMs = 0;
    data.forEach((unit) => {

        /////////////////////////////CONSOLE/////////////////////////////////////
            ///TODO: Console log in the code "UTILS_JS" line 19
            if( process && process.env.NODE_ENV === 'development' ){
                console.group( 'Console log in the code "UTILS_JS" line 19' );
                console.info( 'unit: ', unit );
                console.info( 'unit.data: ', unit.data );
                console.info( 'this: ', this );
                //console.table( this );
                console.groupEnd();
            }
        /////////////////////////////END CONSOLE/////////////////////////////////
        unit.data.forEach((unitData) =>{
            /////////////////////////////CONSOLE/////////////////////////////////////
                ///TODO: Console log in the code "UTILS_JS" line 31
                if( process && process.env.NODE_ENV === 'development' ){
                    console.group( 'Console log in the code "UTILS_JS" line 31' );
                    console.info( 'unitData: ', unitData );
                    console.info( 'unitData.duration_in: ', unitData.duration_in );
                    console.info( 'getMs(unitData.duration_in): ', getMs(unitData.duration_in) );
                    console.info( 'allTimeMs:  ', allTimeMs );
                    console.info( 'this: ', this );
                    //console.table( this );
                    console.groupEnd();
                }
            /////////////////////////////END CONSOLE/////////////////////////////////
            allTimeMs += getMs(unitData.duration_in)
        })
    })
    /////////////////////////////CONSOLE/////////////////////////////////////
    ///TODO: Console log in the code "INDEX_JS" line 18
    if( process && process.env.NODE_ENV === 'development' ){
        console.group( 'Console log in the code "INDEX_JS" line 18' );
        console.info( 'data: ', data );
        console.info( 'allTimeMs: ', allTimeMs );
        console.info( 'this: ', this );
        //console.table( this );
        console.groupEnd();
    }
    /////////////////////////////END CONSOLE/////////////////////////////////
};

