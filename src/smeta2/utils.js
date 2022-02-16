export const parseArr = (arr, ratio) => {
    let subTotal = 0;
    arr.forEach((v) => {
        subTotal += parseObject(v,ratio);
    });
    return subTotal;
}

export const parseObject = (obj, ratio) => {
    let subTotal = 0;

    if (obj.hasOwnProperty('duration')) {
        obj.hours = obj.duration * ratio;
        subTotal += Math.round(obj.hours);
    } else {
        for (const objKey in obj) {
            if (Array.isArray(obj[objKey])) {
                subTotal += parseArr(obj[objKey], ratio);
            }
        }
        obj.subTotal = subTotal;
    }
    return subTotal;
}