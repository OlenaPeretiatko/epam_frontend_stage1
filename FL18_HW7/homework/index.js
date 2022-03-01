function getAge(birth) {
    let now = new Date();
    let res = now.getFullYear() - birth.getFullYear();
    if (now.getMonth() < birth.getMonth() ||
        now.getMonth() <= birth.getMonth() && now.getDate() < birth.getDate()) {
        res -= 1;
    }
    return res;
}

function getWeekDay(date) {
    date = new Date(date);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let num = date.getDay();
    return weekDays[num];
}


function getAmountDaysToNewYear() {
    let one_day = 1000 * 60 * 60 * 24;
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);

    if (today.getMonth() === 0 && today.getDate() > 0) {
        newYear = new Date(today.getFullYear() + 1, 0, 1);
    }

    return ((newYear.getTime() - today.getTime()) / one_day).toFixed(0);
}

function getProgrammersDay(year) {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = 13, month = 8;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        date = 12;
    }
    let progDay = new Date(year, month, date);
    return `${date} Sep, ${year} (${weekday[progDay.getDay()]})`;
}


function howFarIs(day) {
    let today = new Date().getDay();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < weekday.length; i++) {
        if (weekday[today].toLowerCase() === day.toLowerCase()) {
            console.log(`Hey, today is ${weekday[today]} =)`);
            break;
        } else if (day.toLowerCase() === weekday[i].toLowerCase()) {
            console.log(`It's ${Math.abs(i - today)} day(s) left till ${weekday[i]}.`)
        }
    }
}

function isValidIdentifier(string) {
    const pattern = /^[a-zA-Z$_][a-zA-Z0-9$_]+$/g;
    return pattern.test(string);
}


function capitalize(s) {
    return s.replace(/\b\w/g, c => c.toUpperCase());
}

function isValidAudioFile(file) {
    const pattern = /^[a-zA-Z]+(.mp3|.flac|.alac|.aac)+$/g;
    return pattern.test(file);
}


function getHexadecimalColors(string) {
    string = string.split(' ');
    let myArr = [];
    const pattern = /^[#][a-zA-Z0-9](?:.{2}|.{5})$/g;
    for (let el of string) {
        el = el.split(';')[0];
        if (pattern.test(el) === true) {
            myArr.push(el);
        }
    }
    return myArr;
}


function isValidPassword(password) {
    const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9$_.,]{8})$/;
    return pattern.test(password);

}

function addThousandsSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}

function getAllUrlsFromText(string) {
    string = string.split(' ');
    let myArr = [];
    const pattern = /(http|ftp|https):\/\/([a-zA-Z0-9./]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:~+#-])/g;
    for (let el of string) {
        if (pattern.test(el) === true) {
            myArr.push(el);
        }
    }
    return myArr;

}
