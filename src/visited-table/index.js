import React from 'react';
import data from './data';
import {extractData} from "./utils";


export default function VisitedTable(){

    extractData( data);

    return (
        <div>
            Say hello
        </div>
    );
}