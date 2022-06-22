import {DEFAULT_EXPAND, RATIO} from "./index";

export const parseArr = (arr) => {
    let subTotal = 0;
    arr.forEach((v) => {
        subTotal += calculateTimes(v);
    });
    return subTotal;
}

export const calculateTimes = (obj) => {
    let subTotal = 0;

    if (obj.hasOwnProperty('duration')) {
        obj.hours = obj.duration * RATIO;
        subTotal += Math.round(obj.hours);
    } else {
        obj.expand = DEFAULT_EXPAND;
        for (const objKey in obj) {
            if (Array.isArray(obj[objKey])) {
                subTotal += parseArr(obj[objKey]);
            }
        }
        obj.subTotal = subTotal;
    }
    return subTotal;
}