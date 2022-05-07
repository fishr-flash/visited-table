export default () => (

    <div style={{display:'flex'}}>
        <div>
            <button className="favorite styled"
                    onClick={()=>{
                        //////////////////////////CONSOLE//////////////////////////
                        /// TODO: path: "src/smeta2/index.jsx" line "108", time: "0:38:52:643"'
                        if( process && process.env.MODE_ENV !== 'production' ){
                            const clr1 = 'color: #747678';
                            const clr = 'color: #72b8f5';
                            console.group( '%c path: "src/smeta2/index.jsx", line: "108", time: "0:38:52:643"', clr1);
                            console.info('%c this: ', clr, 'onclick' );
                            //console.info('this: ', this );
                            //console.table( this );
                            console.groupEnd();
                        }
                        ////////////////////////END CONSOLE////////////////////////
                    }}
                    type="button">
                Load
            </button>
            <input type={"file"} className={"favorite styled"}/>
            <button type="submit" className={"favorite styled"} onClick={()=>window.open('file.doc')}>Download!</button>
            <a href={'#'} download onChange={(event)=>{
                //////////////////////////CONSOLE//////////////////////////
                /// TODO: path: "src/smeta2/index.jsx" line "127", time: "1:20:36:864"'
                if( process && process.env.MODE_ENV !== 'production' ){
                    const clr1 = 'color: #747678';
                    const clr = 'color: #72b8f5';
                    console.group( '%c path: "src/smeta2/index.jsx", line: "127", time: "1:20:36:864"', clr1);
                    console.info('%c event: ', clr, event );
                    //console.info('this: ', this );
                    //console.table( this );
                    console.groupEnd();
                }
                ////////////////////////END CONSOLE////////////////////////
            }}> download</a>
        </div>
        <div>
            <button className="favorite styled"
                    type="button">
                Save
            </button>
        </div>
    </div>
);