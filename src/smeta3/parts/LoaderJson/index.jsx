export default () => (

    <div style={{display:'flex'}}>
        <div>
            <button className="favorite styled"
                    type="button">
                Load
            </button>
            <input type={"file"} className={"favorite styled"}/>
            <button
                type="submit"
                className={"favorite styled"}
                data-testid="toggle"
                onClick={()=>window.open('file.doc')}>
                Download!
            </button>
            <a href={'#'} download onChange={()=> null}> download</a>
        </div>
        <div>
            <button className="favorite styled"
                    type="button">
                Save
            </button>
        </div>
    </div>
);