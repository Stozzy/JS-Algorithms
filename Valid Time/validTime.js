function validTime(str) {
    let timeArray = str.split(':');
    let checkHour = '';
    let checkMinute = '';

    checkHour = Number(timeArray[0]) < 24 ? true : false;
    checkMinute = Number(timeArray[1]) < 60 ? true : false;

    return checkHour === checkMinute;
}

console.log(validTime('00:00'));
console.log(validTime('24:00'));
console.log(validTime('23:59'));
console.log(validTime('11:60'));
