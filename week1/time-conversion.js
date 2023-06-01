function timeConversion(s) {
    const timeArr = s.split(':');
    let hour = parseInt(timeArr[0]);
    const minute = timeArr[1];
    const second = timeArr[2].substring(0, 2);
    const period = timeArr[2].substring(2);

    if(period === "AM" && hour === 12) {
        hour = 0;
    } else if(period === "PM" && hour !== 12) {
        hour += 12;
    }

    const hourString = hour.toString().padStart(2, '0');
    return hourString + ":" + minute + ":" + second;
}